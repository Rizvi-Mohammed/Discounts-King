import { useEffect, useMemo, useState, useCallback } from "react";
import { json } from "@remix-run/node";
import { useForm, useField } from "@shopify/react-form";
import { useAppBridge, Provider, ResourcePicker } from "@shopify/app-bridge-react";
import { Redirect } from "@shopify/app-bridge/actions";
import { CurrencyCode } from "@shopify/react-i18n";
import {
  DeleteMajor
} from '@shopify/polaris-icons';
import {
  CirclePlusMajor
} from '@shopify/polaris-icons';
import {
  Form,
  useActionData,
  useNavigation,
  useSubmit,
} from "@remix-run/react";
import {
  ActiveDatesCard,
  CombinationCard,
  DiscountClass,
  DiscountMethod,
  MethodCard,
  DiscountStatus,
  RequirementType,
  SummaryCard,
  UsageLimitsCard,
  onBreadcrumbAction,
} from "@shopify/discount-app-components";
import {
  AddMajor
} from '@shopify/polaris-icons';
import {
  Banner,
  Card,
  Text,
  Layout,
  Page,
  PageActions,
  TextField,
  VerticalStack,
  Tag,
  Checkbox,
  Button,
  Icon,
  FormLayout,
  RadioButton,
} from "@shopify/polaris";

import shopify from "../shopify.server";

// This is a server-side action that is invoked when the form is submitted.
// It makes an admin GraphQL request to create a discount.
export const action = async ({ params, request }) => {
  const { functionId } = params;
  const { admin } = await shopify.authenticate.admin(request);
  const formData = await request.formData();
  const {
    title,
    method,
    code,
    combinesWith,
    usageLimit,
    appliesOncePerCustomer,
    startsAt,
    endsAt,
    configuration,
  } = JSON.parse(formData.get("discount"));

  const baseDiscount = {
    functionId,
    title,
    combinesWith,
    startsAt: new Date(startsAt),
    endsAt: endsAt && new Date(endsAt),
  };

  if (method === DiscountMethod.Code) {
    const baseCodeDiscount = {
      ...baseDiscount,
      title: code,
      code,
      usageLimit,
      appliesOncePerCustomer,
    };

    const response = await admin.graphql(
      `#graphql
          mutation CreateCodeDiscount($discount: DiscountCodeAppInput!) {
            discountCreate: discountCodeAppCreate(codeAppDiscount: $discount) {
              userErrors {
                code
                message
                field
              }
            }
          }`,
      {
        variables: {
          discount: {
            ...baseCodeDiscount,
            metafields: [
              {
                namespace: "$app:volume-discount",
                key: "function-configuration",
                type: "json",
                value: JSON.stringify({
                  price1: configuration.price1,
                  price2: configuration.price2,
                  price3: configuration.price3,
                  price4: configuration.price4,
                  tiers: configuration.tiers,
                  title1: configuration.title1,
                  title2: configuration.title2,
                  title3: configuration.title3,
                  title4: configuration.title4,
                  tierTag1: configuration.tierTag1,
                  tierTag2: configuration.tierTag2,
                  tierTag3: configuration.tierTag3,
                  tierTag4: configuration.tierTag4,
                  percentage: configuration.percentage,
                  percentage2: configuration.percentage2,
                  percentage3: configuration.percentage3,
                  percentage4: configuration.percentage4,
                  productId: configuration.productId,
                  userTag: configuration.userTag,
                  checkUser: configuration.checkUser,
                }),
              },
            ],
          },
        },
      }
    );

    const responseJson = await response.json();
    const errors = responseJson.data.discountCreate?.userErrors;
    return json({ errors });
  } else {
    const response = await admin.graphql(
      `#graphql
          mutation CreateAutomaticDiscount($discount: DiscountAutomaticAppInput!) {
            discountCreate: discountAutomaticAppCreate(automaticAppDiscount: $discount) {
              userErrors {
                code
                message
                field
              }
            }
          }`,
      {
        variables: {
          discount: {
            ...baseDiscount,
            metafields: [
              {
                namespace: "$app:volume-discount",
                key: "function-configuration",
                type: "json",
                value: JSON.stringify({
                  price1: configuration.price1,
                  price2: configuration.price2,
                  price3: configuration.price3,
                  price4: configuration.price4,
                  percentage: configuration.percentage,
                  percentage2: configuration.percentage2,
                  percentage3: configuration.percentage3,
                  percentage4: configuration.percentage4,
                  tiers: configuration.tiers,
                  title1: configuration.title1,
                  title2: configuration.title2,
                  title3: configuration.title3,
                  title4: configuration.title4,
                  tierTag1: configuration.tierTag1,
                  tierTag2: configuration.tierTag2,
                  tierTag3: configuration.tierTag3,
                  tierTag4: configuration.tierTag4,
                  productId: configuration.productId,
                  userTag: configuration.userTag,
                  checkUser: configuration.checkUser,
                }),
              },
            ],
          },
        },
      }
    );

    const responseJson = await response.json();
    const errors = responseJson.data.discountCreate?.userErrors;
    return json({ errors });
  }
};

// This is the React component for the page.
export default function VolumeNew() {
  const submitForm = useSubmit();
  const actionData = useActionData();
  const navigation = useNavigation();
  const app = useAppBridge();
  const todaysDate = useMemo(() => new Date(), []);

  const isLoading = navigation.state === "submitting";
  const currencyCode = CurrencyCode.Cad;
  const submitErrors = actionData?.errors || [];
  const redirect = Redirect.create(app);

  useEffect(() => {
    if (actionData?.errors.length === 0) {
      redirect.dispatch(Redirect.Action.ADMIN_SECTION, {
        name: Redirect.ResourceType.Discount,
      });
    }
  }, [actionData]);

  var [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  }

  const [userCheck, setUserCheck] = useState(false);
  const handleUserCheck = (bol) => {
    setUserCheck(bol);
    configuration.checkUser.value = bol;
    console.log(configuration.checkUser.value);
  }

  const [tags, setTags] = useState(['']);
   const addCustomerTag = () => {
    if(value != "")
    tags.push(value);
    //console.log(tags);
    setValue("");
    configuration.userTag.value = tags;
     configuration.userTag.value = configuration.userTag.value.filter(t => t != '');
    console.log( configuration.userTag.value)
   }

  const [value, setValue] = useState('');

  const handleChange = useCallback(
    (newValue) => setValue(newValue),
    [],
  );

  const[tierCount, setTierCount] = useState(0);

  const addTiers = () => {
    setTierCount(tierCount+1);
    configuration.tiers.value = tierCount.toString();
  }

  const removeTiers = () => {
    setTierCount(tierCount - 1);
    configuration.tiers.value = tierCount.toString();
  }

  const removeTag = useCallback(
    (tag) => () => {
      setTags((previousTags) =>
        previousTags.filter((previousTag) => previousTag !== tag),
      );
    },
    [],
  );

  const [checkValue, setCheckValue] = useState('disabled');

  const handleCheckChange = useCallback(
    (_, newValue) => {setCheckValue(newValue);
    newValue == 'optional' ? handleUserCheck(true) : handleUserCheck(false);
    },
    [],
  );


  const {
    fields: {
      discountTitle,
      discountCode,
      discountMethod,
      combinesWith,
      requirementType,
      requirementSubtotal,
      requirementQuantity,
      usageLimit,
      appliesOncePerCustomer,
      startDate,
      endDate,
      configuration,
    },
    submit,
  } = useForm({
    fields: {
      discountTitle: useField(""),
      discountMethod: useField(DiscountMethod.Code),
      discountCode: useField(""),
      combinesWith: useField({
        orderDiscounts: false,
        productDiscounts: false,
        shippingDiscounts: false,
      }),
      requirementType: useField(RequirementType.None),
      requirementSubtotal: useField("0"),
      requirementQuantity: useField("0"),
      usageLimit: useField(null),
      appliesOncePerCustomer: useField(false),
      startDate: useField(todaysDate),
      endDate: useField(null),
      configuration: {
        price1: useField('0.00'),
        price2: useField('0.00'),
        price3: useField('0.00'),
        price4: useField('0.00'),
        percentage: useField('0'),
        percentage2: useField('0'),
        percentage3: useField('0'),
        percentage4: useField('0'),
        tiers: useField('0'),
        title1: useField(''),
        title2: useField(''),
        title3: useField(''),
        title4: useField(''),
        tierTag1: useField(''),
        tierTag2: useField(''),
        tierTag3: useField(''),
        tierTag4: useField(''),
        productId: useField('0'),
        userTag: useField(['']),
        checkUser: useField(false),
      },
    },
    onSubmit: async (form) => {
      const discount = {
        title: form.discountTitle,
        method: form.discountMethod,
        code: form.discountCode,
        combinesWith: form.combinesWith,
        usageLimit: form.usageLimit == null ? null : parseInt(form.usageLimit),
        appliesOncePerCustomer: form.appliesOncePerCustomer,
        startsAt: form.startDate,
        endsAt: form.endDate,
        configuration: {
          price1: parseFloat(form.configuration.price1),
          price2: parseFloat(form.configuration.price2),
          price3: parseFloat(form.configuration.price3),
          price4: parseFloat(form.configuration.price4),
          percentage: parseFloat(form.configuration.percentage),
          percentage2: parseFloat(form.configuration.percentage2),
          percentage3: parseFloat(form.configuration.percentage3),
          percentage4: parseFloat(form.configuration.percentage4),
          tiers: Number(form.configuration.tiers),
          title1: String(form.configuration.title1),
          title2: String(form.configuration.title2),
          title3: String(form.configuration.title3),
          title4: String(form.configuration.title4),
          tierTag1: String(form.configuration.tierTag1),
          tierTag2: String(form.configuration.tierTag2),
          tierTag3: String(form.configuration.tierTag3),
          tierTag4: String(form.configuration.tierTag4),
          productId: String(form.configuration.productId),
          userTag: form.configuration.userTag,
          checkUser: Boolean(form.configuration.checkUser),
        },
      };

      submitForm({ discount: JSON.stringify(discount) }, { method: "post" });

      return { status: "success" };
    },
  });

  const errorBanner =
    submitErrors.length > 0 ? (
      <Layout.Section>
        <Banner status="critical">
          <p>There were some issues with your form submission:</p>
          <ul>
            {submitErrors.map(({ message, field }, index) => {
              return (
                <li key={`${message}${index}`}>
                  {field.join(".")} {message}
                </li>
              );
            })}
          </ul>
        </Banner>
      </Layout.Section>
    ) : null;

  return (
    // Render a discount form using Polaris components and the discount app components
    <Page
      title="Create volume discount"
      backAction={{
        content: "Discounts",
        onAction: () => onBreadcrumbAction(redirect, true),
      }}
      primaryAction={{
        content: "Save",
        onAction: submit,
        loading: isLoading,
      }}
    >
      <Layout>
        {errorBanner}
        <Layout.Section>
          <Form method="post">
            <VerticalStack align="space-around" gap="2">
              <MethodCard
                title="Volume"
                discountTitle={discountTitle}
                discountClass={DiscountClass.Product}
                discountCode={discountCode}
                discountMethod={discountMethod}
              />
              <Card>
                <VerticalStack gap="3">
                  <Text variant="headingMd" as="h2">
                    Tiers
                    <span style={{fontSize: 'smaller'}}>
                       - ({tierCount+1 + "/4"})
                    </span>
                  </Text>
                  <Text variant="headingMd" as="h3">
                    Tier 1
                  </Text>
                  <span
                    style={{ cursor: 'pointer' , width: '20px', position: 'absolute', left: '60%'}}
                    onClick={removeTiers}
                  >
                    <Icon
                      source={DeleteMajor}
                      color="base"
                    />
                  </span>
                  <FormLayout>
                    <TextField
                      label="Discount message"
                      autoComplete="on"
                      {...configuration.title1}

                    />
                  <FormLayout.Group>
                  <TextField
                    label="Minimum price"
                    autoComplete="on"
                    prefix="$"
                    {...configuration.price1}
                    
                  />
                  <TextField
                    label="Discount percentage"
                    autoComplete="on"
                    {...configuration.percentage}
                    suffix="%"
                  />
                  <TextField
                    label="Tier to be applied to customer"
                    autoComplete="on"
                    {...configuration.tierTag1}

                  />
                  </FormLayout.Group>
                  </FormLayout>
                </VerticalStack>
                {tierCount == 0 ? <div style={{marginTop: '15px'}}><Button plain onClick={addTiers}>+ Add Tier</Button></div> : ""}
                 

                {
                  tierCount > 0 ?
                    <>
                      <VerticalStack gap="3">
                        <div style={{marginTop: '20px'}}>
                        <Text variant="headingMd" as="h3">
                          Tier 2
                          <span
                            style={{ cursor: 'pointer', width: '20px', position: 'absolute', left: '60%' }}
                            onClick={removeTiers}
                          >
                            <Icon
                              source={DeleteMajor}
                              color="base"
                            />
                          </span>
                        </Text>
                        </div>
                        <FormLayout>
                          <FormLayout.Group>
                            <TextField
                              label="Minimum quantity"
                              autoComplete="on"
                              prefix="$"
                              {...configuration.price2}

                            />
                            <TextField
                              label="Discount percentage"
                              autoComplete="on"
                              {...configuration.percentage2}
                              suffix="%"
                            />
                          </FormLayout.Group>
                        </FormLayout>
                      </VerticalStack>
                      {tierCount > 0 && tierCount == 1 ? <div style={{ marginTop: '15px' }}><Button plain onClick={addTiers}>+ Add Tier</Button></div> : ""}
                    </> :
                    ""
                }{
                  tierCount > 1 ?
                    <>
                      <VerticalStack gap="3">
                        <div style={{ marginTop: '20px' }}>
                        <Text variant="headingMd" as="h3">
                          Tier 3
                            <span
                              style={{ cursor: 'pointer', width: '20px', position: 'absolute', left: '60%' }}
                              onClick={removeTiers}
                            >
                              <Icon
                                source={DeleteMajor}
                                color="base"
                              />
                            </span>
                        </Text>
                        </div>
                        <FormLayout>
                          <FormLayout.Group>
                            <TextField
                              label="Minimum quantity"
                              autoComplete="on"
                              prefix="$"
                              {...configuration.price3}

                            />
                            <TextField
                              label="Discount percentage"
                              autoComplete="on"
                              {...configuration.percentage3}
                              suffix="%"
                            />
                          </FormLayout.Group>
                        </FormLayout>
                      </VerticalStack>
                      {tierCount > 1 && tierCount == 2 ? <div style={{marginTop: '15px'}}><Button plain onClick={addTiers}>+ Add Tier</Button></div> : ""}
                    </> :
                    ""
                }{
                  tierCount > 2 ?
                    <>
                      <VerticalStack gap="3">
                        <div style={{ marginTop: '20px' }}>
                        <Text variant="headingMd" as="h3">
                          Tier 4
                            <span
                              style={{ cursor: 'pointer', width: '20px', position: 'absolute', left: '60%' }}
                              onClick={removeTiers}
                            >
                              <Icon
                                source={DeleteMajor}
                                color="base"
                              />
                            </span>
                        </Text>
                        </div>
                        <FormLayout>
                          <FormLayout.Group>
                            <TextField
                              label="Minimum quantity"
                              autoComplete="on"
                              prefix="$"
                              {...configuration.price4}

                            />
                            <TextField
                              label="Discount percentage"
                              autoComplete="on"
                              {...configuration.percentage4}
                              suffix="%"
                            />
                          </FormLayout.Group>
                        </FormLayout>
                      </VerticalStack>
                    </> :
                    ""
                }
              </Card>
  
              <Card>
                <Text variant="headingMd" as="h2">
                  Customizations 
                </Text>
                <div style={{marginTop: '10px'}}></div>
                <RadioButton
                  label="All customers"
                  helpText="All customers get the discount."
                  checked={checkValue === 'disabled'}
                  id="disabled"
                  name="accounts"
                  onChange={handleCheckChange}
                />
                <RadioButton
                  label="On specific customer tags"
                  helpText="Only tagged customers get the discount."
                  id="optional"
                  name="accounts"
                  checked={checkValue === 'optional'}
                  onChange={handleCheckChange}
                />
                {
                  userCheck ? 
                  <>
                      <div style={{ marginTop: '30px' }}>
                      <FormLayout>

                      <TextField
                        label="customer tag"
                        labelHidden
                        placeholder="customer tag"
                        autoComplete="on"
                        onChange={handleChange}
                        value={value}
                        id="userTag"
                        maxLength={30}
                        showCharacterCount
                        connectedRight={
                          <Button onClick={addCustomerTag}>
                            <Icon
                              source={CirclePlusMajor}
                              color="base"
                            />
                          </Button>
                        }
                      />
                      </FormLayout>
                      </div>
                      <div style={{margin: '5px'}}>
                        
                        {
                          tags.map((t, i) => (
                            t != "" ?
                              <span style={{ marginRight: '5px' }}>
                            <Tag
                             key={i}
                            onRemove={removeTag(t)}
                             >
                              {t}
                              </Tag>
                            </span>
                            :
                            null
                          ))
                        }
                      </div>
                  </>
                  :
                  ""
                }

              </Card>

              {discountMethod.value === DiscountMethod.Code && (
                <UsageLimitsCard
                  totalUsageLimit={usageLimit}
                  oncePerCustomer={appliesOncePerCustomer}
                />
              )}
              <CombinationCard
                combinableDiscountTypes={combinesWith}
                discountClass={DiscountClass.Product}
                discountDescriptor={"Discount"}
              />
              <ActiveDatesCard
                startDate={startDate}
                endDate={endDate}
                timezoneAbbreviation="EST"
              />
            </VerticalStack>
          </Form>
        </Layout.Section>
        <Layout.Section secondary>
          <SummaryCard
            header={{
              discountMethod: discountMethod.value,
              discountDescriptor:
                discountMethod.value === DiscountMethod.Automatic
                  ? discountTitle.value
                  : discountCode.value,
              appDiscountType: "Volume",
              isEditing: false,
            }}
            performance={{
              status: DiscountStatus.Scheduled,
              usageCount: 0,
              isEditing: false,
            }}
            minimumRequirements={{
              requirementType: requirementType.value,
              subtotal: requirementSubtotal.value,
              quantity: requirementQuantity.value,
              currencyCode: currencyCode,
            }}
            usageLimits={{
              oncePerCustomer: appliesOncePerCustomer.value,
              totalUsageLimit: usageLimit.value,
            }}
            activeDates={{
              startDate: startDate.value,
              endDate: endDate.value,
            }}
          />
        </Layout.Section>
        <Layout.Section>
          <PageActions
            primaryAction={{
              content: "Save discount",
              onAction: submit,
              loading: isLoading,
            }}
            secondaryActions={[
              {
                content: "Discard",
                onAction: () => onBreadcrumbAction(redirect, true),
              },
            ]}
          />
        </Layout.Section>
      </Layout>
    </Page>
  );
}
