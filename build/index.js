var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_server2 = require("react-dom/server"), import_node2 = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot"));

// app/shopify.server.js
var import_node = require("@shopify/shopify-app-remix/adapters/node"), import_server = require("@shopify/shopify-app-remix/server"), import_shopify_app_session_storage_prisma = require("@shopify/shopify-app-session-storage-prisma"), import__ = require("@shopify/shopify-api/rest/admin/2023-07");

// app/db.server.js
var import_client = require("@prisma/client"), prisma = global.prisma || new import_client.PrismaClient();
global.prisma || (global.prisma = new import_client.PrismaClient());
var db_server_default = prisma;

// app/shopify.server.js
var _a, shopify2 = (0, import_server.shopifyApp)({
  apiKey: process.env.SHOPIFY_API_KEY,
  apiSecretKey: process.env.SHOPIFY_API_SECRET || "",
  apiVersion: import_server.LATEST_API_VERSION,
  scopes: (_a = process.env.SCOPES) == null ? void 0 : _a.split(","),
  appUrl: process.env.SHOPIFY_APP_URL || "",
  authPathPrefix: "/auth",
  sessionStorage: new import_shopify_app_session_storage_prisma.PrismaSessionStorage(db_server_default),
  distribution: import_server.AppDistribution.AppStore,
  restResources: import__.restResources,
  webhooks: {
    APP_UNINSTALLED: {
      deliveryMethod: import_server.DeliveryMethod.Http,
      callbackUrl: "/webhooks"
    }
  },
  hooks: {
    afterAuth: async ({ session }) => {
      shopify2.registerWebhooks({ session });
    }
  },
  ...process.env.SHOP_CUSTOM_DOMAIN ? { customShopDomains: [process.env.SHOP_CUSTOM_DOMAIN] } : {}
}), shopify_server_default = shopify2;
var addDocumentResponseHeaders = shopify2.addDocumentResponseHeaders, authenticate = shopify2.authenticate, unauthenticated = shopify2.unauthenticated, login = shopify2.login, registerWebhooks = shopify2.registerWebhooks, sessionStorage = shopify2.sessionStorage;

// app/entry.server.jsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
async function handleRequest(request, responseStatusCode, responseHeaders, remixContext, _loadContext) {
  addDocumentResponseHeaders(request, responseHeaders);
  let callbackName = (0, import_isbot.default)(request.headers.get("user-agent")) ? "onAllReady" : "onShellReady";
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server2.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.jsx",
          lineNumber: 26,
          columnNumber: 7
        },
        this
      ),
      {
        [callbackName]: () => {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node2.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App
});
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 14,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 17,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 23,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 19,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/routes/app.volume-discount.$functionId.$id.jsx
var app_volume_discount_functionId_id_exports = {};
__export(app_volume_discount_functionId_id_exports, {
  action: () => action,
  default: () => VolumeEdit,
  loader: () => loader
});
var import_react3 = require("react"), import_node3 = require("@remix-run/node"), import_react_form = require("@shopify/react-form"), import_app_bridge_react = require("@shopify/app-bridge-react"), import_actions = require("@shopify/app-bridge/actions"), import_react_i18n = require("@shopify/react-i18n"), import_react4 = require("@remix-run/react"), import_discount_app_components = require("@shopify/discount-app-components"), import_polaris2 = require("@shopify/polaris");

// app/components/NotFoundPage/NotFoundPage.jsx
var import_polaris = require("@shopify/polaris");

// app/components/NotFoundPage/empty-state.svg
var empty_state_default = "/build/_assets/empty-state-SNB2R44M.svg";

// app/components/NotFoundPage/NotFoundPage.jsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function NotFoundPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_polaris.Page, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_polaris.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    import_polaris.EmptyState,
    {
      heading: "There is no page at this address",
      image: empty_state_default,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Check the URL and try again, or use the search bar to find what you need." }, void 0, !1, {
        fileName: "app/components/NotFoundPage/NotFoundPage.jsx",
        lineNumber: 12,
        columnNumber: 11
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/NotFoundPage/NotFoundPage.jsx",
      lineNumber: 8,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/NotFoundPage/NotFoundPage.jsx",
    lineNumber: 7,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/NotFoundPage/NotFoundPage.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/routes/app.volume-discount.$functionId.$id.jsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), action = async ({ params, request }) => {
  var _a2, _b;
  let { id, functionId } = params, { admin } = await shopify_server_default.authenticate.admin(request), formData = await request.formData(), {
    title,
    method,
    code,
    combinesWith,
    usageLimit,
    appliesOncePerCustomer,
    startsAt,
    endsAt,
    configuration
  } = JSON.parse(formData.get("discount")), baseDiscount = {
    functionId,
    title,
    combinesWith,
    startsAt: new Date(startsAt),
    endsAt: endsAt && new Date(endsAt)
  };
  if (method === import_discount_app_components.DiscountMethod.Code) {
    let baseCodeDiscount = {
      ...baseDiscount,
      title: code,
      code,
      usageLimit,
      appliesOncePerCustomer
    }, errors = (_a2 = (await (await admin.graphql(
      `#graphql
          mutation UpdateCodeDiscount($id: ID!, $discount: DiscountCodeAppInput!) {
            discountUpdate: discountCodeAppUpdate(id: $id, codeAppDiscount: $discount) {
              userErrors {
                code
                message
                field
              }
            }
          }`,
      {
        variables: {
          id: `gid://shopify/DiscountCodeApp/${id}`,
          discount: {
            ...baseCodeDiscount,
            metafields: [
              {
                id: configuration.metafieldId,
                value: JSON.stringify({
                  quantity: configuration.quantity,
                  percentage: configuration.percentage
                })
              }
            ]
          }
        }
      }
    )).json()).data.discountUpdate) == null ? void 0 : _a2.userErrors;
    return (0, import_node3.json)({ errors });
  } else {
    let errors = (_b = (await (await admin.graphql(
      `#graphql
          mutation UpdateAutomaticDiscount($id: ID!, $discount: DiscountAutomaticAppInput!) {
            discountUpdate: discountAutomaticAppUpdate(id: $id, automaticAppDiscount: $discount) {
              userErrors {
                code
                message
                field
              }
            }
          }`,
      {
        variables: {
          id: `gid://shopify/DiscountAutomaticApp/${id}`,
          discount: {
            ...baseDiscount,
            metafields: [
              {
                id: configuration.metafieldId,
                value: JSON.stringify({
                  quantity: configuration.quantity,
                  percentage: configuration.percentage
                })
              }
            ]
          }
        }
      }
    )).json()).data.discountUpdate) == null ? void 0 : _b.userErrors;
    return (0, import_node3.json)({ errors });
  }
}, loader = async ({ params, request }) => {
  var _a2;
  let { id } = params, { admin } = await shopify_server_default.authenticate.admin(request), responseJson = await (await admin.graphql(
    `#graphql
      query GetDiscount($id: ID!) {
        discountNode(id: $id) {
          id
          configurationField: metafield(
            namespace: "$app:volume-discount"
            key: "function-configuration"
          ) {
            id
            value
          }
          discount {
            __typename
            ... on DiscountAutomaticApp {
              title
              discountClass
              combinesWith {
                orderDiscounts
                productDiscounts
                shippingDiscounts
              }
              startsAt
              endsAt
            }
            ... on DiscountCodeApp {
              title
              discountClass
              combinesWith {
                orderDiscounts
                productDiscounts
                shippingDiscounts
              }
              startsAt
              endsAt
              usageLimit
              appliesOncePerCustomer
              codes(first: 1) {
                nodes {
                  code
                }
              }
            }
          }
        }
      }`,
    {
      variables: {
        id: `gid://shopify/DiscountNode/${id}`
      }
    }
  )).json();
  if (!responseJson.data.discountNode || !responseJson.data.discountNode.discount)
    return (0, import_node3.json)({ discount: null });
  let method = responseJson.data.discountNode.discount.__typename === "DiscountCodeApp" ? import_discount_app_components.DiscountMethod.Code : import_discount_app_components.DiscountMethod.Automatic, {
    title,
    codes,
    combinesWith,
    usageLimit,
    appliesOncePerCustomer,
    startsAt,
    endsAt
  } = responseJson.data.discountNode.discount, configuration = JSON.parse(
    responseJson.data.discountNode.configurationField.value
  ), discount = {
    title,
    method,
    code: ((_a2 = codes == null ? void 0 : codes.nodes[0]) == null ? void 0 : _a2.code) ?? "",
    combinesWith,
    usageLimit: usageLimit ?? null,
    appliesOncePerCustomer: appliesOncePerCustomer ?? !1,
    startsAt,
    endsAt,
    configuration: {
      ...configuration,
      metafieldId: responseJson.data.discountNode.configurationField.id
    }
  };
  return (0, import_node3.json)({ discount });
};
function VolumeEdit() {
  let submitForm = (0, import_react4.useSubmit)(), actionData = (0, import_react4.useActionData)(), { discount } = (0, import_react4.useLoaderData)(), navigation = (0, import_react4.useNavigation)(), app = (0, import_app_bridge_react.useAppBridge)(), isLoading = navigation.state === "submitting", currencyCode = import_react_i18n.CurrencyCode.Cad, submitErrors = (actionData == null ? void 0 : actionData.errors) || [], redirect2 = import_actions.Redirect.create(app);
  if ((0, import_react3.useEffect)(() => {
    (actionData == null ? void 0 : actionData.errors.length) === 0 && redirect2.dispatch(import_actions.Redirect.Action.ADMIN_SECTION, {
      name: import_actions.Redirect.ResourceType.Discount
    });
  }, [actionData]), !discount)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(NotFoundPage, {}, void 0, !1, {
      fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
      lineNumber: 270,
      columnNumber: 12
    }, this);
  let { metafieldId } = discount.configuration, {
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
      configuration
    },
    submit
  } = (0, import_react_form.useForm)({
    fields: {
      discountTitle: (0, import_react_form.useField)(discount.title),
      discountMethod: (0, import_react_form.useField)(discount.method),
      discountCode: (0, import_react_form.useField)(discount.code),
      combinesWith: (0, import_react_form.useField)(discount.combinesWith),
      requirementType: (0, import_react_form.useField)(import_discount_app_components.RequirementType.None),
      requirementSubtotal: (0, import_react_form.useField)("0"),
      requirementQuantity: (0, import_react_form.useField)("0"),
      usageLimit: (0, import_react_form.useField)(discount.usageLimit),
      appliesOncePerCustomer: (0, import_react_form.useField)(discount.appliesOncePerCustomer),
      startDate: (0, import_react_form.useField)(discount.startsAt),
      endDate: (0, import_react_form.useField)(discount.endsAt),
      configuration: {
        quantity: (0, import_react_form.useField)(discount.configuration.quantity),
        percentage: (0, import_react_form.useField)(discount.configuration.percentage)
      }
    },
    onSubmit: async (form) => {
      let discount2 = {
        title: form.discountTitle,
        method: form.discountMethod,
        code: form.discountCode,
        combinesWith: form.combinesWith,
        usageLimit: form.usageLimit == null ? null : parseInt(form.usageLimit),
        appliesOncePerCustomer: form.appliesOncePerCustomer,
        startsAt: form.startDate,
        endsAt: form.endDate,
        configuration: {
          metafieldId,
          quantity: parseInt(form.configuration.quantity),
          percentage: parseFloat(form.configuration.percentage)
        }
      };
      return submitForm({ discount: JSON.stringify(discount2) }, { method: "post" }), { status: "success" };
    }
  }), errorBanner = submitErrors.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.Banner, { status: "critical", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "There were some issues with your form submission:" }, void 0, !1, {
      fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
      lineNumber: 335,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { children: submitErrors.map(({ message, field }, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: [
      field.join("."),
      " ",
      message
    ] }, `${message}${index}`, !0, {
      fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
      lineNumber: 339,
      columnNumber: 17
    }, this)) }, void 0, !1, {
      fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
      lineNumber: 336,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
    lineNumber: 334,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
    lineNumber: 333,
    columnNumber: 7
  }, this) : null;
  return (
    // Render a discount form using Polaris components and the discount app components
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      import_polaris2.Page,
      {
        title: "Create volume discount",
        backAction: {
          content: "Discounts",
          onAction: () => (0, import_discount_app_components.onBreadcrumbAction)(redirect2, !0)
        },
        primaryAction: {
          content: "Save",
          onAction: submit,
          loading: isLoading
        },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.Layout, { children: [
          errorBanner,
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.VerticalStack, { align: "space-around", gap: "2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              import_discount_app_components.MethodCard,
              {
                title: "Volume",
                discountTitle,
                discountClass: import_discount_app_components.DiscountClass.Product,
                discountCode,
                discountMethod
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
                lineNumber: 368,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.VerticalStack, { gap: "3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.Text, { variant: "headingMd", as: "h2", children: "Volume" }, void 0, !1, {
                fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
                lineNumber: 377,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                import_polaris2.TextField,
                {
                  label: "Minimum quantity",
                  autoComplete: "on",
                  ...configuration.quantity
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
                  lineNumber: 380,
                  columnNumber: 19
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                import_polaris2.TextField,
                {
                  label: "Discount percentage",
                  autoComplete: "on",
                  ...configuration.percentage,
                  suffix: "%"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
                  lineNumber: 385,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
              lineNumber: 376,
              columnNumber: 17
            }, this) }, void 0, !1, {
              fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
              lineNumber: 375,
              columnNumber: 15
            }, this),
            discountMethod.value === import_discount_app_components.DiscountMethod.Code && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              import_discount_app_components.UsageLimitsCard,
              {
                totalUsageLimit: usageLimit,
                oncePerCustomer: appliesOncePerCustomer
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
                lineNumber: 394,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              import_discount_app_components.CombinationCard,
              {
                combinableDiscountTypes: combinesWith,
                discountClass: import_discount_app_components.DiscountClass.Product,
                discountDescriptor: "Discount"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
                lineNumber: 399,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              import_discount_app_components.ActiveDatesCard,
              {
                startDate,
                endDate,
                timezoneAbbreviation: "EST"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
                lineNumber: 404,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
            lineNumber: 367,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
            lineNumber: 366,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
            lineNumber: 365,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.Layout.Section, { secondary: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            import_discount_app_components.SummaryCard,
            {
              header: {
                discountMethod: discountMethod.value,
                discountDescriptor: discountMethod.value === import_discount_app_components.DiscountMethod.Automatic ? discountTitle.value : discountCode.value,
                appDiscountType: "Volume",
                isEditing: !1
              },
              performance: {
                status: import_discount_app_components.DiscountStatus.Scheduled,
                usageCount: 0,
                isEditing: !1
              },
              minimumRequirements: {
                requirementType: requirementType.value,
                subtotal: requirementSubtotal.value,
                quantity: requirementQuantity.value,
                currencyCode
              },
              usageLimits: {
                oncePerCustomer: appliesOncePerCustomer.value,
                totalUsageLimit: usageLimit.value
              },
              activeDates: {
                startDate: startDate.value,
                endDate: endDate.value
              }
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
              lineNumber: 413,
              columnNumber: 11
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
            lineNumber: 412,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            import_polaris2.PageActions,
            {
              primaryAction: {
                content: "Save discount",
                onAction: submit,
                loading: isLoading
              },
              secondaryActions: [
                {
                  content: "Discard",
                  onAction: () => (0, import_discount_app_components.onBreadcrumbAction)(redirect2, !0)
                }
              ]
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
              lineNumber: 445,
              columnNumber: 11
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
            lineNumber: 444,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
          lineNumber: 363,
          columnNumber: 7
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/app.volume-discount.$functionId.$id.jsx",
        lineNumber: 351,
        columnNumber: 5
      },
      this
    )
  );
}

// app/routes/app.volume-discount.$functionId.new.jsx
var app_volume_discount_functionId_new_exports = {};
__export(app_volume_discount_functionId_new_exports, {
  action: () => action2,
  default: () => VolumeNew
});
var import_react5 = require("react"), import_node4 = require("@remix-run/node"), import_react_form2 = require("@shopify/react-form"), import_app_bridge_react2 = require("@shopify/app-bridge-react"), import_actions2 = require("@shopify/app-bridge/actions"), import_react_i18n2 = require("@shopify/react-i18n"), import_react6 = require("@remix-run/react"), import_discount_app_components2 = require("@shopify/discount-app-components"), import_polaris3 = require("@shopify/polaris");
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), action2 = async ({ params, request }) => {
  var _a2, _b;
  let { functionId } = params, { admin } = await shopify_server_default.authenticate.admin(request), formData = await request.formData(), {
    title,
    method,
    code,
    combinesWith,
    usageLimit,
    appliesOncePerCustomer,
    startsAt,
    endsAt,
    configuration
  } = JSON.parse(formData.get("discount")), baseDiscount = {
    functionId,
    title,
    combinesWith,
    startsAt: new Date(startsAt),
    endsAt: endsAt && new Date(endsAt)
  };
  if (method === import_discount_app_components2.DiscountMethod.Code) {
    let baseCodeDiscount = {
      ...baseDiscount,
      title: code,
      code,
      usageLimit,
      appliesOncePerCustomer
    }, errors = (_a2 = (await (await admin.graphql(
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
                  checkUser: configuration.checkUser
                })
              }
            ]
          }
        }
      }
    )).json()).data.discountCreate) == null ? void 0 : _a2.userErrors;
    return (0, import_node4.json)({ errors });
  } else {
    let errors = (_b = (await (await admin.graphql(
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
                  checkUser: configuration.checkUser
                })
              }
            ]
          }
        }
      }
    )).json()).data.discountCreate) == null ? void 0 : _b.userErrors;
    return (0, import_node4.json)({ errors });
  }
};
function VolumeNew() {
  let submitForm = (0, import_react6.useSubmit)(), actionData = (0, import_react6.useActionData)(), navigation = (0, import_react6.useNavigation)(), app = (0, import_app_bridge_react2.useAppBridge)(), todaysDate = (0, import_react5.useMemo)(() => /* @__PURE__ */ new Date(), []), isLoading = navigation.state === "submitting", currencyCode = import_react_i18n2.CurrencyCode.Cad, submitErrors = (actionData == null ? void 0 : actionData.errors) || [], redirect2 = import_actions2.Redirect.create(app);
  (0, import_react5.useEffect)(() => {
    (actionData == null ? void 0 : actionData.errors.length) === 0 && redirect2.dispatch(import_actions2.Redirect.Action.ADMIN_SECTION, {
      name: import_actions2.Redirect.ResourceType.Discount
    });
  }, [actionData]);
  var [open, setOpen] = (0, import_react5.useState)(!1);
  let handleOpen = () => {
    setOpen(!0);
  }, [product, setProduct] = (0, import_react5.useState)({ name: "", img: "", id: "" }), [productCheck, setProductCheck] = (0, import_react5.useState)(!1), handleProductCheck = () => {
    setProductCheck(!productCheck), configuration.checkProduct.value = !productCheck;
  }, [userCheck, setUserCheck] = (0, import_react5.useState)(!1), handleUserCheck = () => {
    setUserCheck(!userCheck), configuration.checkUser.value = !userCheck, console.log(configuration.checkUser.value);
  }, {
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
      configuration
    },
    submit
  } = (0, import_react_form2.useForm)({
    fields: {
      discountTitle: (0, import_react_form2.useField)(""),
      discountMethod: (0, import_react_form2.useField)(import_discount_app_components2.DiscountMethod.Code),
      discountCode: (0, import_react_form2.useField)(""),
      combinesWith: (0, import_react_form2.useField)({
        orderDiscounts: !1,
        productDiscounts: !1,
        shippingDiscounts: !1
      }),
      requirementType: (0, import_react_form2.useField)(import_discount_app_components2.RequirementType.None),
      requirementSubtotal: (0, import_react_form2.useField)("0"),
      requirementQuantity: (0, import_react_form2.useField)("0"),
      usageLimit: (0, import_react_form2.useField)(null),
      appliesOncePerCustomer: (0, import_react_form2.useField)(!1),
      startDate: (0, import_react_form2.useField)(todaysDate),
      endDate: (0, import_react_form2.useField)(null),
      configuration: {
        quantity: (0, import_react_form2.useField)("1"),
        percentage: (0, import_react_form2.useField)("0"),
        checkProduct: (0, import_react_form2.useField)(!1),
        productId: (0, import_react_form2.useField)("0"),
        userTag: (0, import_react_form2.useField)("0"),
        checkUser: (0, import_react_form2.useField)(!1)
      }
    },
    onSubmit: async (form) => {
      let discount = {
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
          checkUser: Boolean(form.configuration.checkUser)
        }
      };
      return submitForm({ discount: JSON.stringify(discount) }, { method: "post" }), { status: "success" };
    }
  }), errorBanner = submitErrors.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Banner, { status: "critical", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "There were some issues with your form submission:" }, void 0, !1, {
      fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
      lineNumber: 269,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: submitErrors.map(({ message, field }, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: [
      field.join("."),
      " ",
      message
    ] }, `${message}${index}`, !0, {
      fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
      lineNumber: 273,
      columnNumber: 17
    }, this)) }, void 0, !1, {
      fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
      lineNumber: 270,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
    lineNumber: 268,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
    lineNumber: 267,
    columnNumber: 7
  }, this) : null;
  return (
    // Render a discount form using Polaris components and the discount app components
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      import_polaris3.Page,
      {
        title: "Create volume discount",
        backAction: {
          content: "Discounts",
          onAction: () => (0, import_discount_app_components2.onBreadcrumbAction)(redirect2, !0)
        },
        primaryAction: {
          content: "Save",
          onAction: submit,
          loading: isLoading
        },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Layout, { children: [
          errorBanner,
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react6.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.VerticalStack, { align: "space-around", gap: "2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              import_discount_app_components2.MethodCard,
              {
                title: "Volume",
                discountTitle,
                discountClass: import_discount_app_components2.DiscountClass.Product,
                discountCode,
                discountMethod
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                lineNumber: 302,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.VerticalStack, { gap: "3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Text, { variant: "headingMd", as: "h2", children: "Volume" }, void 0, !1, {
                fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                lineNumber: 311,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                import_polaris3.TextField,
                {
                  label: "Minimum quantity",
                  autoComplete: "on",
                  ...configuration.quantity
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                  lineNumber: 314,
                  columnNumber: 19
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                import_polaris3.TextField,
                {
                  label: "Discount percentage",
                  autoComplete: "on",
                  ...configuration.percentage,
                  suffix: "%"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                  lineNumber: 319,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
              lineNumber: 310,
              columnNumber: 17
            }, this) }, void 0, !1, {
              fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
              lineNumber: 309,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Card, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Text, { variant: "headingMd", as: "h2", children: "Customizations" }, void 0, !1, {
                fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                lineNumber: 368,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                import_polaris3.Checkbox,
                {
                  label: "On specific Products",
                  checked: productCheck,
                  onChange: handleProductCheck
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                  lineNumber: 371,
                  columnNumber: 17
                },
                this
              ),
              productCheck ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Tag, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "display", children: product.name }, void 0, !1, {
                  fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                  lineNumber: 378,
                  columnNumber: 21
                }, this) }, void 0, !1, {
                  fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                  lineNumber: 377,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { onClick: handleOpen, children: "Click here to add product" }, void 0, !1, {
                  fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                  lineNumber: 380,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                  import_app_bridge_react2.ResourcePicker,
                  {
                    resourceType: "Product",
                    open,
                    onCancel: () => setOpen(!1),
                    onSelection: (e) => {
                      setProduct({ name: e.selection[0].title, img: "", id: e.selection[0].variants[0].id }), configuration.productId.value = e.selection[0].variants[0].id, console.log(e.selection[0].variants[0].id), setOpen(!1);
                    }
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                    lineNumber: 381,
                    columnNumber: 19
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                lineNumber: 376,
                columnNumber: 33
              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("hr", {}, void 0, !1, {
                fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                lineNumber: 392,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                import_polaris3.Checkbox,
                {
                  checked: userCheck,
                  onChange: handleUserCheck,
                  label: "On specific Users"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                  lineNumber: 393,
                  columnNumber: 17
                },
                this
              ),
              userCheck ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                  import_polaris3.TextField,
                  {
                    label: "User Tag",
                    autoComplete: "on",
                    ...configuration.userTag
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                    lineNumber: 401,
                    columnNumber: 23
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Tag, { children: configuration.userTag.value }, void 0, !1, {
                  fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                  lineNumber: 407,
                  columnNumber: 25
                }, this) }, void 0, !1, {
                  fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                  lineNumber: 406,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                lineNumber: 400,
                columnNumber: 21
              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("hr", {}, void 0, !1, {
                fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                lineNumber: 411,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
              lineNumber: 367,
              columnNumber: 15
            }, this),
            discountMethod.value === import_discount_app_components2.DiscountMethod.Code && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              import_discount_app_components2.UsageLimitsCard,
              {
                totalUsageLimit: usageLimit,
                oncePerCustomer: appliesOncePerCustomer
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                lineNumber: 417,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              import_discount_app_components2.CombinationCard,
              {
                combinableDiscountTypes: combinesWith,
                discountClass: import_discount_app_components2.DiscountClass.Product,
                discountDescriptor: "Discount"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                lineNumber: 422,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              import_discount_app_components2.ActiveDatesCard,
              {
                startDate,
                endDate,
                timezoneAbbreviation: "EST"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
                lineNumber: 427,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
            lineNumber: 301,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
            lineNumber: 300,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
            lineNumber: 299,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Layout.Section, { secondary: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            import_discount_app_components2.SummaryCard,
            {
              header: {
                discountMethod: discountMethod.value,
                discountDescriptor: discountMethod.value === import_discount_app_components2.DiscountMethod.Automatic ? discountTitle.value : discountCode.value,
                appDiscountType: "Volume",
                isEditing: !1
              },
              performance: {
                status: import_discount_app_components2.DiscountStatus.Scheduled,
                usageCount: 0,
                isEditing: !1
              },
              minimumRequirements: {
                requirementType: requirementType.value,
                subtotal: requirementSubtotal.value,
                quantity: requirementQuantity.value,
                currencyCode
              },
              usageLimits: {
                oncePerCustomer: appliesOncePerCustomer.value,
                totalUsageLimit: usageLimit.value
              },
              activeDates: {
                startDate: startDate.value,
                endDate: endDate.value
              }
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
              lineNumber: 436,
              columnNumber: 11
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
            lineNumber: 435,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            import_polaris3.PageActions,
            {
              primaryAction: {
                content: "Save discount",
                onAction: submit,
                loading: isLoading
              },
              secondaryActions: [
                {
                  content: "Discard",
                  onAction: () => (0, import_discount_app_components2.onBreadcrumbAction)(redirect2, !0)
                }
              ]
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
              lineNumber: 468,
              columnNumber: 11
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
            lineNumber: 467,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
          lineNumber: 297,
          columnNumber: 7
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/app.volume-discount.$functionId.new.jsx",
        lineNumber: 285,
        columnNumber: 5
      },
      this
    )
  );
}

// app/routes/app.order-discount.$functionId.new.jsx
var app_order_discount_functionId_new_exports = {};
__export(app_order_discount_functionId_new_exports, {
  action: () => action3,
  default: () => VolumeNew2
});
var import_react7 = require("react"), import_node5 = require("@remix-run/node"), import_react_form3 = require("@shopify/react-form"), import_app_bridge_react3 = require("@shopify/app-bridge-react"), import_actions3 = require("@shopify/app-bridge/actions"), import_react_i18n3 = require("@shopify/react-i18n"), import_polaris_icons = require("@shopify/polaris-icons"), import_polaris_icons2 = require("@shopify/polaris-icons"), import_react8 = require("@remix-run/react"), import_discount_app_components3 = require("@shopify/discount-app-components"), import_polaris_icons3 = require("@shopify/polaris-icons"), import_polaris4 = require("@shopify/polaris");
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), action3 = async ({ params, request }) => {
  var _a2, _b;
  let { functionId } = params, { admin } = await shopify_server_default.authenticate.admin(request), formData = await request.formData(), {
    title,
    method,
    code,
    combinesWith,
    usageLimit,
    appliesOncePerCustomer,
    startsAt,
    endsAt,
    configuration
  } = JSON.parse(formData.get("discount")), baseDiscount = {
    functionId,
    title,
    combinesWith,
    startsAt: new Date(startsAt),
    endsAt: endsAt && new Date(endsAt)
  };
  if (method === import_discount_app_components3.DiscountMethod.Code) {
    let baseCodeDiscount = {
      ...baseDiscount,
      title: code,
      code,
      usageLimit,
      appliesOncePerCustomer
    }, errors = (_a2 = (await (await admin.graphql(
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
                  checkUser: configuration.checkUser
                })
              }
            ]
          }
        }
      }
    )).json()).data.discountCreate) == null ? void 0 : _a2.userErrors;
    return (0, import_node5.json)({ errors });
  } else {
    let errors = (_b = (await (await admin.graphql(
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
                  checkUser: configuration.checkUser
                })
              }
            ]
          }
        }
      }
    )).json()).data.discountCreate) == null ? void 0 : _b.userErrors;
    return (0, import_node5.json)({ errors });
  }
};
function VolumeNew2() {
  let submitForm = (0, import_react8.useSubmit)(), actionData = (0, import_react8.useActionData)(), navigation = (0, import_react8.useNavigation)(), app = (0, import_app_bridge_react3.useAppBridge)(), todaysDate = (0, import_react7.useMemo)(() => /* @__PURE__ */ new Date(), []), isLoading = navigation.state === "submitting", currencyCode = import_react_i18n3.CurrencyCode.Cad, submitErrors = (actionData == null ? void 0 : actionData.errors) || [], redirect2 = import_actions3.Redirect.create(app);
  (0, import_react7.useEffect)(() => {
    (actionData == null ? void 0 : actionData.errors.length) === 0 && redirect2.dispatch(import_actions3.Redirect.Action.ADMIN_SECTION, {
      name: import_actions3.Redirect.ResourceType.Discount
    });
  }, [actionData]);
  var [open, setOpen] = (0, import_react7.useState)(!1);
  let handleOpen = () => {
    setOpen(!0);
  }, [userCheck, setUserCheck] = (0, import_react7.useState)(!1), handleUserCheck = (bol) => {
    setUserCheck(bol), configuration.checkUser.value = bol, console.log(configuration.checkUser.value);
  }, [tags, setTags] = (0, import_react7.useState)([""]), addCustomerTag = () => {
    value != "" && tags.push(value), setValue(""), configuration.userTag.value = tags, configuration.userTag.value = configuration.userTag.value.filter((t) => t != ""), console.log(configuration.userTag.value);
  }, [value, setValue] = (0, import_react7.useState)(""), handleChange = (0, import_react7.useCallback)(
    (newValue) => setValue(newValue),
    []
  ), [tierCount, setTierCount] = (0, import_react7.useState)(0), addTiers = () => {
    setTierCount(tierCount + 1), configuration.tiers.value = tierCount.toString();
  }, removeTiers = () => {
    setTierCount(tierCount - 1), configuration.tiers.value = tierCount.toString();
  }, removeTag = (0, import_react7.useCallback)(
    (tag) => () => {
      setTags(
        (previousTags) => previousTags.filter((previousTag) => previousTag !== tag)
      );
    },
    []
  ), [checkValue, setCheckValue] = (0, import_react7.useState)("disabled"), handleCheckChange = (0, import_react7.useCallback)(
    (_, newValue) => {
      setCheckValue(newValue), newValue == "optional" ? handleUserCheck(!0) : handleUserCheck(!1);
    },
    []
  ), {
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
      configuration
    },
    submit
  } = (0, import_react_form3.useForm)({
    fields: {
      discountTitle: (0, import_react_form3.useField)(""),
      discountMethod: (0, import_react_form3.useField)(import_discount_app_components3.DiscountMethod.Code),
      discountCode: (0, import_react_form3.useField)(""),
      combinesWith: (0, import_react_form3.useField)({
        orderDiscounts: !1,
        productDiscounts: !1,
        shippingDiscounts: !1
      }),
      requirementType: (0, import_react_form3.useField)(import_discount_app_components3.RequirementType.None),
      requirementSubtotal: (0, import_react_form3.useField)("0"),
      requirementQuantity: (0, import_react_form3.useField)("0"),
      usageLimit: (0, import_react_form3.useField)(null),
      appliesOncePerCustomer: (0, import_react_form3.useField)(!1),
      startDate: (0, import_react_form3.useField)(todaysDate),
      endDate: (0, import_react_form3.useField)(null),
      configuration: {
        price1: (0, import_react_form3.useField)("0.00"),
        price2: (0, import_react_form3.useField)("0.00"),
        price3: (0, import_react_form3.useField)("0.00"),
        price4: (0, import_react_form3.useField)("0.00"),
        percentage: (0, import_react_form3.useField)("0"),
        percentage2: (0, import_react_form3.useField)("0"),
        percentage3: (0, import_react_form3.useField)("0"),
        percentage4: (0, import_react_form3.useField)("0"),
        tiers: (0, import_react_form3.useField)("0"),
        title1: (0, import_react_form3.useField)(""),
        title2: (0, import_react_form3.useField)(""),
        title3: (0, import_react_form3.useField)(""),
        title4: (0, import_react_form3.useField)(""),
        tierTag1: (0, import_react_form3.useField)(""),
        tierTag2: (0, import_react_form3.useField)(""),
        tierTag3: (0, import_react_form3.useField)(""),
        tierTag4: (0, import_react_form3.useField)(""),
        productId: (0, import_react_form3.useField)("0"),
        userTag: (0, import_react_form3.useField)([""]),
        checkUser: (0, import_react_form3.useField)(!1)
      }
    },
    onSubmit: async (form) => {
      let discount = {
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
          userTag: Array(form.configuration.userTag),
          checkUser: Boolean(form.configuration.checkUser)
        }
      };
      return submitForm({ discount: JSON.stringify(discount) }, { method: "post" }), { status: "success" };
    }
  }), errorBanner = submitErrors.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.Banner, { status: "critical", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "There were some issues with your form submission:" }, void 0, !1, {
      fileName: "app/routes/app.order-discount.$functionId.new.jsx",
      lineNumber: 378,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("ul", { children: submitErrors.map(({ message, field }, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: [
      field.join("."),
      " ",
      message
    ] }, `${message}${index}`, !0, {
      fileName: "app/routes/app.order-discount.$functionId.new.jsx",
      lineNumber: 382,
      columnNumber: 17
    }, this)) }, void 0, !1, {
      fileName: "app/routes/app.order-discount.$functionId.new.jsx",
      lineNumber: 379,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/app.order-discount.$functionId.new.jsx",
    lineNumber: 377,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/app.order-discount.$functionId.new.jsx",
    lineNumber: 376,
    columnNumber: 7
  }, this) : null;
  return (
    // Render a discount form using Polaris components and the discount app components
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      import_polaris4.Page,
      {
        title: "Create volume discount",
        backAction: {
          content: "Discounts",
          onAction: () => (0, import_discount_app_components3.onBreadcrumbAction)(redirect2, !0)
        },
        primaryAction: {
          content: "Save",
          onAction: submit,
          loading: isLoading
        },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.Layout, { children: [
          errorBanner,
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react8.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.VerticalStack, { align: "space-around", gap: "2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
              import_discount_app_components3.MethodCard,
              {
                title: "Volume",
                discountTitle,
                discountClass: import_discount_app_components3.DiscountClass.Product,
                discountCode,
                discountMethod
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                lineNumber: 411,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.Card, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.VerticalStack, { gap: "3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.Text, { variant: "headingMd", as: "h2", children: [
                  "Tiers",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { style: { fontSize: "smaller" }, children: [
                    "- (",
                    tierCount + 1 + "/4",
                    ")"
                  ] }, void 0, !0, {
                    fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                    lineNumber: 422,
                    columnNumber: 21
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                  lineNumber: 420,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.Text, { variant: "headingMd", as: "h3", children: "Tier 1" }, void 0, !1, {
                  fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                  lineNumber: 426,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                  "span",
                  {
                    style: { cursor: "pointer", width: "20px", position: "absolute", left: "60%" },
                    onClick: removeTiers,
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                      import_polaris4.Icon,
                      {
                        source: import_polaris_icons.DeleteMajor,
                        color: "base"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                        lineNumber: 433,
                        columnNumber: 21
                      },
                      this
                    )
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                    lineNumber: 429,
                    columnNumber: 19
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.FormLayout, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                    import_polaris4.TextField,
                    {
                      label: "Discount message",
                      autoComplete: "on",
                      ...configuration.title1
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                      lineNumber: 439,
                      columnNumber: 21
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.FormLayout.Group, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                      import_polaris4.TextField,
                      {
                        label: "Minimum price",
                        autoComplete: "on",
                        prefix: "$",
                        ...configuration.price1
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                        lineNumber: 446,
                        columnNumber: 19
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                      import_polaris4.TextField,
                      {
                        label: "Discount percentage",
                        autoComplete: "on",
                        ...configuration.percentage,
                        suffix: "%"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                        lineNumber: 453,
                        columnNumber: 19
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                      import_polaris4.TextField,
                      {
                        label: "Tier to be applied to customer",
                        autoComplete: "on",
                        ...configuration.tierTag1
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                        lineNumber: 459,
                        columnNumber: 19
                      },
                      this
                    )
                  ] }, void 0, !0, {
                    fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                    lineNumber: 445,
                    columnNumber: 19
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                  lineNumber: 438,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                lineNumber: 419,
                columnNumber: 17
              }, this),
              tierCount == 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { style: { marginTop: "15px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.Button, { plain: !0, onClick: addTiers, children: "+ Add Tier" }, void 0, !1, {
                fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                lineNumber: 468,
                columnNumber: 68
              }, this) }, void 0, !1, {
                fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                lineNumber: 468,
                columnNumber: 35
              }, this) : "",
              tierCount > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.VerticalStack, { gap: "3", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { style: { marginTop: "20px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.Text, { variant: "headingMd", as: "h3", children: [
                    "Tier 2",
                    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                      "span",
                      {
                        style: { cursor: "pointer", width: "20px", position: "absolute", left: "60%" },
                        onClick: removeTiers,
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                          import_polaris4.Icon,
                          {
                            source: import_polaris_icons.DeleteMajor,
                            color: "base"
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                            lineNumber: 482,
                            columnNumber: 29
                          },
                          this
                        )
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                        lineNumber: 478,
                        columnNumber: 27
                      },
                      this
                    )
                  ] }, void 0, !0, {
                    fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                    lineNumber: 476,
                    columnNumber: 25
                  }, this) }, void 0, !1, {
                    fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                    lineNumber: 475,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.FormLayout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.FormLayout.Group, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                      import_polaris4.TextField,
                      {
                        label: "Minimum quantity",
                        autoComplete: "on",
                        prefix: "$",
                        ...configuration.price2
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                        lineNumber: 491,
                        columnNumber: 29
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                      import_polaris4.TextField,
                      {
                        label: "Discount percentage",
                        autoComplete: "on",
                        ...configuration.percentage2,
                        suffix: "%"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                        lineNumber: 498,
                        columnNumber: 29
                      },
                      this
                    )
                  ] }, void 0, !0, {
                    fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                    lineNumber: 490,
                    columnNumber: 27
                  }, this) }, void 0, !1, {
                    fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                    lineNumber: 489,
                    columnNumber: 25
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                  lineNumber: 474,
                  columnNumber: 23
                }, this),
                tierCount > 0 && tierCount == 1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { style: { marginTop: "15px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.Button, { plain: !0, onClick: addTiers, children: "+ Add Tier" }, void 0, !1, {
                  fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                  lineNumber: 507,
                  columnNumber: 93
                }, this) }, void 0, !1, {
                  fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                  lineNumber: 507,
                  columnNumber: 58
                }, this) : ""
              ] }, void 0, !0, {
                fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                lineNumber: 473,
                columnNumber: 21
              }, this) : "",
              tierCount > 1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.VerticalStack, { gap: "3", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { style: { marginTop: "20px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.Text, { variant: "headingMd", as: "h3", children: [
                    "Tier 3",
                    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                      "span",
                      {
                        style: { cursor: "pointer", width: "20px", position: "absolute", left: "60%" },
                        onClick: removeTiers,
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                          import_polaris4.Icon,
                          {
                            source: import_polaris_icons.DeleteMajor,
                            color: "base"
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                            lineNumber: 521,
                            columnNumber: 31
                          },
                          this
                        )
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                        lineNumber: 517,
                        columnNumber: 29
                      },
                      this
                    )
                  ] }, void 0, !0, {
                    fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                    lineNumber: 515,
                    columnNumber: 25
                  }, this) }, void 0, !1, {
                    fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                    lineNumber: 514,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.FormLayout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.FormLayout.Group, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                      import_polaris4.TextField,
                      {
                        label: "Minimum quantity",
                        autoComplete: "on",
                        prefix: "$",
                        ...configuration.price3
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                        lineNumber: 530,
                        columnNumber: 29
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                      import_polaris4.TextField,
                      {
                        label: "Discount percentage",
                        autoComplete: "on",
                        ...configuration.percentage3,
                        suffix: "%"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                        lineNumber: 537,
                        columnNumber: 29
                      },
                      this
                    )
                  ] }, void 0, !0, {
                    fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                    lineNumber: 529,
                    columnNumber: 27
                  }, this) }, void 0, !1, {
                    fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                    lineNumber: 528,
                    columnNumber: 25
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                  lineNumber: 513,
                  columnNumber: 23
                }, this),
                tierCount > 1 && tierCount == 2 ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { style: { marginTop: "15px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.Button, { plain: !0, onClick: addTiers, children: "+ Add Tier" }, void 0, !1, {
                  fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                  lineNumber: 546,
                  columnNumber: 91
                }, this) }, void 0, !1, {
                  fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                  lineNumber: 546,
                  columnNumber: 58
                }, this) : ""
              ] }, void 0, !0, {
                fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                lineNumber: 512,
                columnNumber: 21
              }, this) : "",
              tierCount > 2 ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.VerticalStack, { gap: "3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { style: { marginTop: "20px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.Text, { variant: "headingMd", as: "h3", children: [
                  "Tier 4",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                    "span",
                    {
                      style: { cursor: "pointer", width: "20px", position: "absolute", left: "60%" },
                      onClick: removeTiers,
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                        import_polaris4.Icon,
                        {
                          source: import_polaris_icons.DeleteMajor,
                          color: "base"
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                          lineNumber: 560,
                          columnNumber: 31
                        },
                        this
                      )
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                      lineNumber: 556,
                      columnNumber: 29
                    },
                    this
                  )
                ] }, void 0, !0, {
                  fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                  lineNumber: 554,
                  columnNumber: 25
                }, this) }, void 0, !1, {
                  fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                  lineNumber: 553,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.FormLayout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.FormLayout.Group, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                    import_polaris4.TextField,
                    {
                      label: "Minimum quantity",
                      autoComplete: "on",
                      prefix: "$",
                      ...configuration.price4
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                      lineNumber: 569,
                      columnNumber: 29
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                    import_polaris4.TextField,
                    {
                      label: "Discount percentage",
                      autoComplete: "on",
                      ...configuration.percentage4,
                      suffix: "%"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                      lineNumber: 576,
                      columnNumber: 29
                    },
                    this
                  )
                ] }, void 0, !0, {
                  fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                  lineNumber: 568,
                  columnNumber: 27
                }, this) }, void 0, !1, {
                  fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                  lineNumber: 567,
                  columnNumber: 25
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                lineNumber: 552,
                columnNumber: 23
              }, this) }, void 0, !1, {
                fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                lineNumber: 551,
                columnNumber: 21
              }, this) : ""
            ] }, void 0, !0, {
              fileName: "app/routes/app.order-discount.$functionId.new.jsx",
              lineNumber: 418,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.Card, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.Text, { variant: "headingMd", as: "h2", children: "Customizations" }, void 0, !1, {
                fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                lineNumber: 591,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { style: { marginTop: "10px" } }, void 0, !1, {
                fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                lineNumber: 594,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                import_polaris4.RadioButton,
                {
                  label: "All customers",
                  helpText: "All customers get the discount.",
                  checked: checkValue === "disabled",
                  id: "disabled",
                  name: "accounts",
                  onChange: handleCheckChange
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                  lineNumber: 595,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                import_polaris4.RadioButton,
                {
                  label: "On specific customer tags",
                  helpText: "Only tagged customers get the discount.",
                  id: "optional",
                  name: "accounts",
                  checked: checkValue === "optional",
                  onChange: handleCheckChange
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                  lineNumber: 603,
                  columnNumber: 17
                },
                this
              ),
              userCheck ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { style: { marginTop: "30px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.FormLayout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                  import_polaris4.TextField,
                  {
                    label: "customer tag",
                    labelHidden: !0,
                    placeholder: "customer tag",
                    autoComplete: "on",
                    onChange: handleChange,
                    value,
                    id: "userTag",
                    maxLength: 30,
                    showCharacterCount: !0,
                    connectedRight: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.Button, { onClick: addCustomerTag, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                      import_polaris4.Icon,
                      {
                        source: import_polaris_icons2.CirclePlusMajor,
                        color: "base"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                        lineNumber: 629,
                        columnNumber: 29
                      },
                      this
                    ) }, void 0, !1, {
                      fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                      lineNumber: 628,
                      columnNumber: 27
                    }, this)
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                    lineNumber: 617,
                    columnNumber: 23
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                  lineNumber: 615,
                  columnNumber: 23
                }, this) }, void 0, !1, {
                  fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                  lineNumber: 614,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { style: { margin: "5px" }, children: tags.map((t, i) => t != "" ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { style: { marginRight: "5px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                  import_polaris4.Tag,
                  {
                    onRemove: removeTag(t),
                    children: t
                  },
                  i,
                  !1,
                  {
                    fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                    lineNumber: 644,
                    columnNumber: 29
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                  lineNumber: 643,
                  columnNumber: 31
                }, this) : null) }, void 0, !1, {
                  fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                  lineNumber: 638,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                lineNumber: 613,
                columnNumber: 19
              }, this) : ""
            ] }, void 0, !0, {
              fileName: "app/routes/app.order-discount.$functionId.new.jsx",
              lineNumber: 590,
              columnNumber: 15
            }, this),
            discountMethod.value === import_discount_app_components3.DiscountMethod.Code && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
              import_discount_app_components3.UsageLimitsCard,
              {
                totalUsageLimit: usageLimit,
                oncePerCustomer: appliesOncePerCustomer
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                lineNumber: 664,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
              import_discount_app_components3.CombinationCard,
              {
                combinableDiscountTypes: combinesWith,
                discountClass: import_discount_app_components3.DiscountClass.Product,
                discountDescriptor: "Discount"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                lineNumber: 669,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
              import_discount_app_components3.ActiveDatesCard,
              {
                startDate,
                endDate,
                timezoneAbbreviation: "EST"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app.order-discount.$functionId.new.jsx",
                lineNumber: 674,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/app.order-discount.$functionId.new.jsx",
            lineNumber: 410,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/routes/app.order-discount.$functionId.new.jsx",
            lineNumber: 409,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/routes/app.order-discount.$functionId.new.jsx",
            lineNumber: 408,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.Layout.Section, { secondary: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            import_discount_app_components3.SummaryCard,
            {
              header: {
                discountMethod: discountMethod.value,
                discountDescriptor: discountMethod.value === import_discount_app_components3.DiscountMethod.Automatic ? discountTitle.value : discountCode.value,
                appDiscountType: "Volume",
                isEditing: !1
              },
              performance: {
                status: import_discount_app_components3.DiscountStatus.Scheduled,
                usageCount: 0,
                isEditing: !1
              },
              minimumRequirements: {
                requirementType: requirementType.value,
                subtotal: requirementSubtotal.value,
                quantity: requirementQuantity.value,
                currencyCode
              },
              usageLimits: {
                oncePerCustomer: appliesOncePerCustomer.value,
                totalUsageLimit: usageLimit.value
              },
              activeDates: {
                startDate: startDate.value,
                endDate: endDate.value
              }
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.order-discount.$functionId.new.jsx",
              lineNumber: 683,
              columnNumber: 11
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/app.order-discount.$functionId.new.jsx",
            lineNumber: 682,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            import_polaris4.PageActions,
            {
              primaryAction: {
                content: "Save discount",
                onAction: submit,
                loading: isLoading
              },
              secondaryActions: [
                {
                  content: "Discard",
                  onAction: () => (0, import_discount_app_components3.onBreadcrumbAction)(redirect2, !0)
                }
              ]
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.order-discount.$functionId.new.jsx",
              lineNumber: 715,
              columnNumber: 11
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/app.order-discount.$functionId.new.jsx",
            lineNumber: 714,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/app.order-discount.$functionId.new.jsx",
          lineNumber: 406,
          columnNumber: 7
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/app.order-discount.$functionId.new.jsx",
        lineNumber: 394,
        columnNumber: 5
      },
      this
    )
  );
}

// app/routes/app.additional.jsx
var app_additional_exports = {};
__export(app_additional_exports, {
  default: () => AdditionalPage
});
var import_polaris5 = require("@shopify/polaris"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function AdditionalPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris5.Page, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ui-title-bar", { title: "Additional page" }, void 0, !1, {
      fileName: "app/routes/app.additional.jsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris5.Layout, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris5.Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris5.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris5.VerticalStack, { gap: "3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris5.Text, { as: "p", variant: "bodyMd", children: [
          "The app template comes with an additional page which demonstrates how to create multiple pages within app navigation using",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            import_polaris5.Link,
            {
              url: "https://shopify.dev/docs/apps/tools/app-bridge",
              target: "_blank",
              children: "App Bridge"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.additional.jsx",
              lineNumber: 24,
              columnNumber: 17
            },
            this
          ),
          "."
        ] }, void 0, !0, {
          fileName: "app/routes/app.additional.jsx",
          lineNumber: 20,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris5.Text, { as: "p", variant: "bodyMd", children: [
          "To create your own page and have it show up in the app navigation, add a page inside ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Code, { children: "app/routes" }, void 0, !1, {
            fileName: "app/routes/app.additional.jsx",
            lineNumber: 34,
            columnNumber: 47
          }, this),
          ", and a link to it in the ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Code, { children: "<ui-nav-menu>" }, void 0, !1, {
            fileName: "app/routes/app.additional.jsx",
            lineNumber: 35,
            columnNumber: 35
          }, this),
          " component found in ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Code, { children: "app/routes/app.jsx" }, void 0, !1, {
            fileName: "app/routes/app.additional.jsx",
            lineNumber: 36,
            columnNumber: 26
          }, this),
          "."
        ] }, void 0, !0, {
          fileName: "app/routes/app.additional.jsx",
          lineNumber: 32,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/app.additional.jsx",
        lineNumber: 19,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.additional.jsx",
        lineNumber: 18,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.additional.jsx",
        lineNumber: 17,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris5.Layout.Section, { secondary: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris5.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris5.VerticalStack, { gap: "2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris5.Text, { as: "h2", variant: "headingMd", children: "Resources" }, void 0, !1, {
          fileName: "app/routes/app.additional.jsx",
          lineNumber: 44,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris5.List, { spacing: "extraTight", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris5.List.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          import_polaris5.Link,
          {
            url: "https://shopify.dev/docs/apps/design-guidelines/navigation#app-nav",
            target: "_blank",
            children: "App nav best practices"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app.additional.jsx",
            lineNumber: 49,
            columnNumber: 19
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/app.additional.jsx",
          lineNumber: 48,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/app.additional.jsx",
          lineNumber: 47,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/app.additional.jsx",
        lineNumber: 43,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.additional.jsx",
        lineNumber: 42,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.additional.jsx",
        lineNumber: 41,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/app.additional.jsx",
      lineNumber: 16,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/app.additional.jsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}
function Code({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
    import_polaris5.Box,
    {
      as: "span",
      padding: "025",
      paddingInlineStart: "1",
      paddingInlineEnd: "1",
      background: "bg-subdued",
      borderWidth: "1",
      borderColor: "border",
      borderRadius: "1",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("code", { children }, void 0, !1, {
        fileName: "app/routes/app.additional.jsx",
        lineNumber: 77,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/app.additional.jsx",
      lineNumber: 67,
      columnNumber: 5
    },
    this
  );
}

// app/routes/app._index.jsx
var app_index_exports = {};
__export(app_index_exports, {
  action: () => action4,
  default: () => Index,
  loader: () => loader2
});
var import_react9 = require("react"), import_node6 = require("@remix-run/node"), import_react10 = require("@remix-run/react"), import_polaris6 = require("@shopify/polaris");
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), loader2 = async ({ request }) => {
  let { session } = await authenticate.admin(request);
  return (0, import_node6.json)({ shop: session.shop.replace(".myshopify.com", "") });
};
async function action4({ request }) {
  let { admin } = await authenticate.admin(request), color = ["Red", "Orange", "Yellow", "Green"][Math.floor(Math.random() * 4)], responseJson = await (await admin.graphql(
    `#graphql
      mutation populateProduct($input: ProductInput!) {
        productCreate(input: $input) {
          product {
            id
            title
            handle
            status
            variants(first: 10) {
              edges {
                node {
                  id
                  price
                  barcode
                  createdAt
                }
              }
            }
          }
        }
      }`,
    {
      variables: {
        input: {
          title: `${color} Snowboard`,
          variants: [{ price: Math.random() * 100 }]
        }
      }
    }
  )).json();
  return (0, import_node6.json)({
    product: responseJson.data.productCreate.product
  });
}
function Index() {
  var _a2;
  let nav = (0, import_react10.useNavigation)(), { shop } = (0, import_react10.useLoaderData)(), actionData = (0, import_react10.useActionData)(), submit = (0, import_react10.useSubmit)(), isLoading = ["loading", "submitting"].includes(nav.state) && nav.formMethod === "POST", productId = (_a2 = actionData == null ? void 0 : actionData.product) == null ? void 0 : _a2.id.replace(
    "gid://shopify/Product/",
    ""
  );
  (0, import_react9.useEffect)(() => {
    productId && shopify.toast.show("Product created");
  }, [productId]);
  let generateProduct = () => submit({}, { replace: !0, method: "POST" });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.Page, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("ui-title-bar", { title: "Remix app template", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("button", { variant: "primary", onClick: generateProduct, children: "Generate a product" }, void 0, !1, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 101,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 100,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.VerticalStack, { gap: "5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.Layout, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.VerticalStack, { gap: "5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.VerticalStack, { gap: "2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.Text, { as: "h2", variant: "headingMd", children: "Congrats on creating a new Shopify app \u{1F389}" }, void 0, !1, {
            fileName: "app/routes/app._index.jsx",
            lineNumber: 111,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.Text, { variant: "bodyMd", as: "p", children: [
            "This embedded app template uses",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
              import_polaris6.Link,
              {
                url: "https://shopify.dev/docs/apps/tools/app-bridge",
                target: "_blank",
                children: "App Bridge"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app._index.jsx",
                lineNumber: 116,
                columnNumber: 21
              },
              this
            ),
            " ",
            "interface examples like an",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.Link, { url: "/app/additional", children: "additional page in the app nav" }, void 0, !1, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 123,
              columnNumber: 21
            }, this),
            ", as well as an",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
              import_polaris6.Link,
              {
                url: "https://shopify.dev/docs/api/admin-graphql",
                target: "_blank",
                children: "Admin GraphQL"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app._index.jsx",
                lineNumber: 127,
                columnNumber: 21
              },
              this
            ),
            " ",
            "mutation demo, to provide a starting point for app development."
          ] }, void 0, !0, {
            fileName: "app/routes/app._index.jsx",
            lineNumber: 114,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/app._index.jsx",
          lineNumber: 110,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.VerticalStack, { gap: "2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.Text, { as: "h3", variant: "headingMd", children: "Get started with products" }, void 0, !1, {
            fileName: "app/routes/app._index.jsx",
            lineNumber: 138,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.Text, { as: "p", variant: "bodyMd", children: [
            "Generate a product with GraphQL and get the JSON output for that product. Learn more about the",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
              import_polaris6.Link,
              {
                url: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/productCreate",
                target: "_blank",
                children: "productCreate"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app._index.jsx",
                lineNumber: 144,
                columnNumber: 21
              },
              this
            ),
            " ",
            "mutation in our API references."
          ] }, void 0, !0, {
            fileName: "app/routes/app._index.jsx",
            lineNumber: 141,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/app._index.jsx",
          lineNumber: 137,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.HorizontalStack, { gap: "3", align: "end", children: [
          (actionData == null ? void 0 : actionData.product) && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            import_polaris6.Button,
            {
              url: `https://admin.shopify.com/store/${shop}/admin/products/${productId}`,
              target: "_blank",
              children: "View product"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 155,
              columnNumber: 21
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.Button, { loading: isLoading, primary: !0, onClick: generateProduct, children: "Generate a product" }, void 0, !1, {
            fileName: "app/routes/app._index.jsx",
            lineNumber: 162,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/app._index.jsx",
          lineNumber: 153,
          columnNumber: 17
        }, this),
        (actionData == null ? void 0 : actionData.product) && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          import_polaris6.Box,
          {
            padding: "4",
            background: "bg-subdued",
            borderColor: "border",
            borderWidth: "1",
            borderRadius: "2",
            overflowX: "scroll",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("pre", { style: { margin: 0 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("code", { children: JSON.stringify(actionData.product, null, 2) }, void 0, !1, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 176,
              columnNumber: 23
            }, this) }, void 0, !1, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 175,
              columnNumber: 21
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app._index.jsx",
            lineNumber: 167,
            columnNumber: 19
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/app._index.jsx",
        lineNumber: 109,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/app._index.jsx",
        lineNumber: 108,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/app._index.jsx",
        lineNumber: 107,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.Layout.Section, { secondary: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.VerticalStack, { gap: "5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.VerticalStack, { gap: "2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.Text, { as: "h2", variant: "headingMd", children: "App template specs" }, void 0, !1, {
            fileName: "app/routes/app._index.jsx",
            lineNumber: 187,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.VerticalStack, { gap: "2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.Divider, {}, void 0, !1, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 191,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.HorizontalStack, { align: "space-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.Text, { as: "span", variant: "bodyMd", children: "Framework" }, void 0, !1, {
                fileName: "app/routes/app._index.jsx",
                lineNumber: 193,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.Link, { url: "https://remix.run", target: "_blank", children: "Remix" }, void 0, !1, {
                fileName: "app/routes/app._index.jsx",
                lineNumber: 196,
                columnNumber: 23
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 192,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.Divider, {}, void 0, !1, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 200,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.HorizontalStack, { align: "space-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.Text, { as: "span", variant: "bodyMd", children: "Database" }, void 0, !1, {
                fileName: "app/routes/app._index.jsx",
                lineNumber: 202,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.Link, { url: "https://www.prisma.io/", target: "_blank", children: "Prisma" }, void 0, !1, {
                fileName: "app/routes/app._index.jsx",
                lineNumber: 205,
                columnNumber: 23
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 201,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.Divider, {}, void 0, !1, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 209,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.HorizontalStack, { align: "space-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.Text, { as: "span", variant: "bodyMd", children: "Interface" }, void 0, !1, {
                fileName: "app/routes/app._index.jsx",
                lineNumber: 211,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.Link, { url: "https://polaris.shopify.com", target: "_blank", children: "Polaris" }, void 0, !1, {
                  fileName: "app/routes/app._index.jsx",
                  lineNumber: 215,
                  columnNumber: 25
                }, this),
                ", ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
                  import_polaris6.Link,
                  {
                    url: "https://shopify.dev/docs/apps/tools/app-bridge",
                    target: "_blank",
                    children: "App Bridge"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/app._index.jsx",
                    lineNumber: 219,
                    columnNumber: 25
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/app._index.jsx",
                lineNumber: 214,
                columnNumber: 23
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 210,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.Divider, {}, void 0, !1, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 227,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.HorizontalStack, { align: "space-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.Text, { as: "span", variant: "bodyMd", children: "API" }, void 0, !1, {
                fileName: "app/routes/app._index.jsx",
                lineNumber: 229,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
                import_polaris6.Link,
                {
                  url: "https://shopify.dev/docs/api/admin-graphql",
                  target: "_blank",
                  children: "GraphQL API"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/app._index.jsx",
                  lineNumber: 232,
                  columnNumber: 23
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 228,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/app._index.jsx",
            lineNumber: 190,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/app._index.jsx",
          lineNumber: 186,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/app._index.jsx",
          lineNumber: 185,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.VerticalStack, { gap: "2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.Text, { as: "h2", variant: "headingMd", children: "Next steps" }, void 0, !1, {
            fileName: "app/routes/app._index.jsx",
            lineNumber: 244,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.List, { spacing: "extraTight", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.List.Item, { children: [
              "Build an",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
                import_polaris6.Link,
                {
                  url: "https://shopify.dev/docs/apps/getting-started/build-app-example",
                  target: "_blank",
                  children: [
                    " ",
                    "example app"
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/routes/app._index.jsx",
                  lineNumber: 250,
                  columnNumber: 23
                },
                this
              ),
              " ",
              "to get started"
            ] }, void 0, !0, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 248,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.List.Item, { children: [
              "Explore Shopify\u2019s API with",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
                import_polaris6.Link,
                {
                  url: "https://shopify.dev/docs/apps/tools/graphiql-admin-api",
                  target: "_blank",
                  children: "GraphiQL"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/app._index.jsx",
                  lineNumber: 261,
                  columnNumber: 23
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 259,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/app._index.jsx",
            lineNumber: 247,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/app._index.jsx",
          lineNumber: 243,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/app._index.jsx",
          lineNumber: 242,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/app._index.jsx",
        lineNumber: 184,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/app._index.jsx",
        lineNumber: 183,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 106,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 105,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/app._index.jsx",
    lineNumber: 99,
    columnNumber: 5
  }, this);
}

// app/routes/auth.login/route.jsx
var route_exports = {};
__export(route_exports, {
  action: () => action5,
  default: () => Auth,
  links: () => links,
  loader: () => loader3
});
var import_react11 = require("react"), import_node7 = require("@remix-run/node"), import_polaris7 = require("@shopify/polaris"), import_react12 = require("@remix-run/react");

// node_modules/@shopify/polaris/build/esm/styles.css
var styles_default = "/build/_assets/styles-D5DWEPZJ.css";

// app/routes/auth.login/error.server.jsx
var import_server3 = require("@shopify/shopify-app-remix/server");
function loginErrorMessage(loginErrors) {
  return (loginErrors == null ? void 0 : loginErrors.shop) === import_server3.LoginErrorType.MissingShop ? { shop: "Please enter your shop domain to log in" } : (loginErrors == null ? void 0 : loginErrors.shop) === import_server3.LoginErrorType.InvalidShop ? { shop: "Please enter a valid shop domain to log in" } : {};
}

// app/routes/auth.login/route.jsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), links = () => [{ rel: "stylesheet", href: styles_default }];
async function loader3({ request }) {
  let errors = loginErrorMessage(await login(request));
  return (0, import_node7.json)({
    errors,
    polarisTranslations: require("@shopify/polaris/locales/en.json")
  });
}
async function action5({ request }) {
  let errors = loginErrorMessage(await login(request));
  return (0, import_node7.json)({
    errors
  });
}
function Auth() {
  let { polarisTranslations } = (0, import_react12.useLoaderData)(), loaderData = (0, import_react12.useLoaderData)(), actionData = (0, import_react12.useActionData)(), [shop, setShop] = (0, import_react11.useState)(""), { errors } = actionData || loaderData;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_polaris7.AppProvider, { i18n: polarisTranslations, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_polaris7.Page, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_polaris7.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react12.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_polaris7.FormLayout, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_polaris7.Text, { variant: "headingMd", as: "h2", children: "Log in" }, void 0, !1, {
      fileName: "app/routes/auth.login/route.jsx",
      lineNumber: 51,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      import_polaris7.TextField,
      {
        type: "text",
        name: "shop",
        label: "Shop domain",
        helpText: "example.myshopify.com",
        value: shop,
        onChange: setShop,
        autoComplete: "on",
        error: errors.shop
      },
      void 0,
      !1,
      {
        fileName: "app/routes/auth.login/route.jsx",
        lineNumber: 54,
        columnNumber: 15
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_polaris7.Button, { submit: !0, children: "Log in" }, void 0, !1, {
      fileName: "app/routes/auth.login/route.jsx",
      lineNumber: 64,
      columnNumber: 15
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/auth.login/route.jsx",
    lineNumber: 50,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/auth.login/route.jsx",
    lineNumber: 49,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/auth.login/route.jsx",
    lineNumber: 48,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/auth.login/route.jsx",
    lineNumber: 47,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/auth.login/route.jsx",
    lineNumber: 46,
    columnNumber: 5
  }, this);
}

// app/routes/webhooks.jsx
var webhooks_exports = {};
__export(webhooks_exports, {
  action: () => action6
});
var action6 = async ({ request }) => {
  let { topic, shop, session } = await authenticate.webhook(request);
  switch (topic) {
    case "APP_UNINSTALLED":
      session && await db_server_default.session.deleteMany({ where: { shop } });
      break;
    case "CUSTOMERS_DATA_REQUEST":
    case "CUSTOMERS_REDACT":
    case "SHOP_REDACT":
    default:
      throw new Response("Unhandled webhook topic", { status: 404 });
  }
  throw new Response();
};

// app/routes/auth.$.jsx
var auth_exports = {};
__export(auth_exports, {
  loader: () => loader4
});
async function loader4({ request }) {
  return await authenticate.admin(request), null;
}

// app/routes/_index/route.jsx
var route_exports2 = {};
__export(route_exports2, {
  default: () => App2,
  links: () => links2,
  loader: () => loader5
});
var import_node8 = require("@remix-run/node"), import_react13 = require("@remix-run/react");

// app/routes/_index/style.css
var style_default = "/build/_assets/style-M2E3MJNO.css";

// app/routes/_index/route.jsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), links2 = () => [{ rel: "stylesheet", href: style_default }];
async function loader5({ request }) {
  let url = new URL(request.url);
  if (url.searchParams.get("shop"))
    throw (0, import_node8.redirect)(`/app?${url.searchParams.toString()}`);
  return (0, import_node8.json)({ showForm: Boolean(login) });
}
function App2() {
  let { showForm } = (0, import_react13.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "index", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "content", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h1", { children: "A short heading about [your app]" }, void 0, !1, {
      fileName: "app/routes/_index/route.jsx",
      lineNumber: 26,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { children: "A tagline about [your app] that describes your value proposition." }, void 0, !1, {
      fileName: "app/routes/_index/route.jsx",
      lineNumber: 27,
      columnNumber: 9
    }, this),
    showForm && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react13.Form, { method: "post", action: "/auth/login", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("label", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { children: "Shop domain" }, void 0, !1, {
          fileName: "app/routes/_index/route.jsx",
          lineNumber: 31,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("input", { type: "text", name: "shop" }, void 0, !1, {
          fileName: "app/routes/_index/route.jsx",
          lineNumber: 32,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { children: "e.g: my-shop-domain.myshopify.com" }, void 0, !1, {
          fileName: "app/routes/_index/route.jsx",
          lineNumber: 33,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index/route.jsx",
        lineNumber: 30,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("button", { type: "submit", children: "Log in" }, void 0, !1, {
        fileName: "app/routes/_index/route.jsx",
        lineNumber: 35,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index/route.jsx",
      lineNumber: 29,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("strong", { children: "Product feature" }, void 0, !1, {
          fileName: "app/routes/_index/route.jsx",
          lineNumber: 40,
          columnNumber: 13
        }, this),
        ". Some detail about your feature and its benefit to your customer."
      ] }, void 0, !0, {
        fileName: "app/routes/_index/route.jsx",
        lineNumber: 39,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("strong", { children: "Product feature" }, void 0, !1, {
          fileName: "app/routes/_index/route.jsx",
          lineNumber: 44,
          columnNumber: 13
        }, this),
        ". Some detail about your feature and its benefit to your customer."
      ] }, void 0, !0, {
        fileName: "app/routes/_index/route.jsx",
        lineNumber: 43,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("strong", { children: "Product feature" }, void 0, !1, {
          fileName: "app/routes/_index/route.jsx",
          lineNumber: 48,
          columnNumber: 13
        }, this),
        ". Some detail about your feature and its benefit to your customer."
      ] }, void 0, !0, {
        fileName: "app/routes/_index/route.jsx",
        lineNumber: 47,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index/route.jsx",
      lineNumber: 38,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index/route.jsx",
    lineNumber: 25,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index/route.jsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

// app/routes/app.jsx
var app_exports = {};
__export(app_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App3,
  headers: () => headers,
  links: () => links3,
  loader: () => loader6
});
var import_react14 = require("react"), import_node9 = require("@remix-run/node"), import_react15 = require("@remix-run/react"), import_app_bridge_react4 = require("@shopify/app-bridge-react");

// app/components/providers/DiscountProvider.jsx
var import_discount_app_components4 = require("@shopify/discount-app-components");
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function DiscountProvider({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_discount_app_components4.AppProvider, { locale: "en-US", ianaTimezone: "America/Toronto", children }, void 0, !1, {
    fileName: "app/components/providers/DiscountProvider.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/routes/app.jsx
var import_server4 = require("@shopify/shopify-app-remix/server"), import_react16 = require("@shopify/shopify-app-remix/react");
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), links3 = () => [{ rel: "stylesheet", href: styles_default }];
async function loader6({ request }) {
  await authenticate.admin(request);
  let url = new URL(request.url);
  return (0, import_node9.json)({
    apiKey: process.env.SHOPIFY_API_KEY,
    host: url.searchParams.get("host")
  });
}
function App3() {
  let { apiKey, host } = (0, import_react15.useLoaderData)(), [config] = (0, import_react14.useState)({ host, apiKey });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react16.AppProvider, { isEmbeddedApp: !0, apiKey, children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_app_bridge_react4.Provider, { config, children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(DiscountProvider, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("ui-nav-menu", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react15.Link, { to: "/app", rel: "home", children: "Home" }, void 0, !1, {
        fileName: "app/routes/app.jsx",
        lineNumber: 34,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react15.Link, { to: "/app/additional", children: "Additional page" }, void 0, !1, {
        fileName: "app/routes/app.jsx",
        lineNumber: 37,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/app.jsx",
      lineNumber: 33,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react15.Outlet, {}, void 0, !1, {
      fileName: "app/routes/app.jsx",
      lineNumber: 39,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/app.jsx",
    lineNumber: 32,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/app.jsx",
    lineNumber: 31,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/app.jsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}
function ErrorBoundary() {
  return import_server4.boundary.error((0, import_react15.useRouteError)());
}
var headers = (headersArgs) => import_server4.boundary.headers(headersArgs);

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-ZZP77E6W.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-JASYOVLH.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-VBFVND4Y.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-24HIHQ4W.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-JX3PUSFK.js", imports: ["/build/_shared/chunk-3GJP5LZF.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/app": { id: "routes/app", parentId: "root", path: "app", index: void 0, caseSensitive: void 0, module: "/build/routes/app-JPXV76ZP.js", imports: ["/build/_shared/chunk-NMZL6IDN.js", "/build/_shared/chunk-NRLLRDGQ.js", "/build/_shared/chunk-SU66BP3D.js", "/build/_shared/chunk-KOBYEJ4M.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-FTUEWSSK.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/app._index": { id: "routes/app._index", parentId: "routes/app", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/app._index-MLLONA3U.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/app.additional": { id: "routes/app.additional", parentId: "routes/app", path: "additional", index: void 0, caseSensitive: void 0, module: "/build/routes/app.additional-Y57QSI7V.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/app.order-discount.$functionId.new": { id: "routes/app.order-discount.$functionId.new", parentId: "routes/app", path: "order-discount/:functionId/new", index: void 0, caseSensitive: void 0, module: "/build/routes/app.order-discount.$functionId.new-TNLVYFY7.js", imports: ["/build/_shared/chunk-EMNCF7ZD.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/app.volume-discount.$functionId.$id": { id: "routes/app.volume-discount.$functionId.$id", parentId: "routes/app", path: "volume-discount/:functionId/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/app.volume-discount.$functionId.$id-L6WVUVR7.js", imports: ["/build/_shared/chunk-EMNCF7ZD.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/app.volume-discount.$functionId.new": { id: "routes/app.volume-discount.$functionId.new", parentId: "routes/app", path: "volume-discount/:functionId/new", index: void 0, caseSensitive: void 0, module: "/build/routes/app.volume-discount.$functionId.new-EAK5TTS6.js", imports: ["/build/_shared/chunk-EMNCF7ZD.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/auth.$": { id: "routes/auth.$", parentId: "root", path: "auth/*", index: void 0, caseSensitive: void 0, module: "/build/routes/auth.$-4B5WQABX.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/auth.login": { id: "routes/auth.login", parentId: "root", path: "auth/login", index: void 0, caseSensitive: void 0, module: "/build/routes/auth.login-X6OBNR4S.js", imports: ["/build/_shared/chunk-3GJP5LZF.js", "/build/_shared/chunk-KOBYEJ4M.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-FTUEWSSK.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/webhooks": { id: "routes/webhooks", parentId: "root", path: "webhooks", index: void 0, caseSensitive: void 0, module: "/build/routes/webhooks-JFV2P4HI.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "cf414706", hmr: { runtime: "/build/_shared\\chunk-VBFVND4Y.js", timestamp: 1694362906617 }, url: "/build/manifest-CF414706.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { v2_dev: { port: "50310" }, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/app.volume-discount.$functionId.$id": {
    id: "routes/app.volume-discount.$functionId.$id",
    parentId: "routes/app",
    path: "volume-discount/:functionId/:id",
    index: void 0,
    caseSensitive: void 0,
    module: app_volume_discount_functionId_id_exports
  },
  "routes/app.volume-discount.$functionId.new": {
    id: "routes/app.volume-discount.$functionId.new",
    parentId: "routes/app",
    path: "volume-discount/:functionId/new",
    index: void 0,
    caseSensitive: void 0,
    module: app_volume_discount_functionId_new_exports
  },
  "routes/app.order-discount.$functionId.new": {
    id: "routes/app.order-discount.$functionId.new",
    parentId: "routes/app",
    path: "order-discount/:functionId/new",
    index: void 0,
    caseSensitive: void 0,
    module: app_order_discount_functionId_new_exports
  },
  "routes/app.additional": {
    id: "routes/app.additional",
    parentId: "routes/app",
    path: "additional",
    index: void 0,
    caseSensitive: void 0,
    module: app_additional_exports
  },
  "routes/app._index": {
    id: "routes/app._index",
    parentId: "routes/app",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: app_index_exports
  },
  "routes/auth.login": {
    id: "routes/auth.login",
    parentId: "root",
    path: "auth/login",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports
  },
  "routes/webhooks": {
    id: "routes/webhooks",
    parentId: "root",
    path: "webhooks",
    index: void 0,
    caseSensitive: void 0,
    module: webhooks_exports
  },
  "routes/auth.$": {
    id: "routes/auth.$",
    parentId: "root",
    path: "auth/*",
    index: void 0,
    caseSensitive: void 0,
    module: auth_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: route_exports2
  },
  "routes/app": {
    id: "routes/app",
    parentId: "root",
    path: "app",
    index: void 0,
    caseSensitive: void 0,
    module: app_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
