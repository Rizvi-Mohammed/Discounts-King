import { useEffect, useMemo, useState } from "react";
import { json } from "@remix-run/node";
import { useForm, useField } from "@shopify/react-form";
import { useAppBridge, Provider, ResourcePicker } from "@shopify/app-bridge-react";
import { Redirect } from "@shopify/app-bridge/actions";
import { CurrencyCode } from "@shopify/react-i18n";
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
                  quantity: configuration.quantity,
                  percentage: configuration.percentage,
                  checkProduct: configuration.checkProduct,
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
                  quantity: configuration.quantity,
                  percentage: configuration.percentage,
                  checkProduct: configuration.checkProduct,
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

  const [product, setProduct] = useState({ name: "", img: "", id: "" });

  const [productCheck, setProductCheck] = useState(false);
  const handleProductCheck = () => {
    setProductCheck(!productCheck);
    configuration.checkProduct.value = !productCheck;
  }

  const [userCheck, setUserCheck] = useState(false);
  const handleUserCheck = () => {
    setUserCheck(!userCheck);
    configuration.checkUser.value = !userCheck;
    console.log(configuration.checkUser.value);
  }


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
        quantity: useField('1'),
        percentage: useField('0'),
        checkProduct: useField(false),
        productId: useField('0'),
        userTag: useField('0'),
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
          quantity: parseInt(form.configuration.quantity),
          percentage: parseFloat(form.configuration.percentage),
          checkProduct: Boolean(form.configuration.checkProduct),
          productId: String(form.configuration.productId),
          userTag: String(form.configuration.userTag),
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
                    Volume
                  </Text>
                  <TextField
                    label="Minimum quantity"
                    autoComplete="on"
                    {...configuration.quantity}
                  />
                  <TextField
                    label="Discount percentage"
                    autoComplete="on"
                    {...configuration.percentage}
                    suffix="%"
                  />
                </VerticalStack>
              </Card>

              {/**Product Based stacking */}
              {/* <Card>
                <VerticalStack gap="3">
                  <Text variant="headingMd" as="h2">
                    Product Based Stacking
                  </Text>
                  <>
                    <Tag>
                      <div className="display">{product.name}</div>
                    </Tag>
                    <div onClick={handleOpen}>Click here to add product</div>
                    <ResourcePicker
                      resourceType="Product"
                      open={open}
                      onCancel={() => setOpen(false)}
                      onSelection={e => {
                        setProduct({ name: e.selection[0].title, img: "", id: e.selection[0].variants[0].id });
                        configuration.productId.value = e.selection[0].variants[0].id;
                        console.log(e.selection[0].variants[0].id);
                        setOpen(false)
                      }}
                    />

                    <TextField
                      label="Minimum Quantity"
                      autoComplete="on"
                      {...configuration.quantity}
                    />
                    <TextField
                      label="Discount percentage"
                      autoComplete="on"
                      {...configuration.percentage}
                      suffix="%"
                    />
                  </>
                </VerticalStack>
              </Card> */}
              {/* End */}

              <Card>
                <Text variant="headingMd" as="h2">
                  Customizations
                </Text>
                <Checkbox
                  label="On specific Products"
                  checked={productCheck}
                  onChange={handleProductCheck}
                />
                {productCheck ? <>
                  <Tag>
                    <div className="display">{product.name}</div>
                  </Tag>
                  <div onClick={handleOpen}>Click here to add product</div>
                  <ResourcePicker
                    resourceType="Product"
                    open={open}
                    onCancel={() => setOpen(false)}
                    onSelection={e => {
                      setProduct({ name: e.selection[0].title, img: "", id: e.selection[0].variants[0].id });
                      configuration.productId.value = e.selection[0].variants[0].id;
                      console.log(e.selection[0].variants[0].id);
                      setOpen(false)
                    }}
                  />
                </> : <hr />}
                <Checkbox
                  checked={userCheck}
                  onChange={handleUserCheck}
                  label="On specific Users"
                />
                {
                  userCheck ?
                    <>
                      <TextField
                        label="User Tag"
                        autoComplete="on"
                        {...configuration.userTag}
                      />
                      <div>
                        <Tag>{configuration.userTag.value}</Tag>
                      </div>
                    </>
                    :
                    <hr />
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
