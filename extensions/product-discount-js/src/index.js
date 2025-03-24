// @ts-check
import { DiscountApplicationStrategy } from "../generated/api";

/**
* @typedef {import("../generated/api").InputQuery} InputQuery
* @typedef {import("../generated/api").FunctionResult} FunctionResult
* @typedef {import("../generated/api").Target} Target
* @typedef {import("../generated/api").ProductVariant} ProductVariant
*/

/**
* @type {FunctionResult}
*/
const EMPTY_DISCOUNT = {
  discountApplicationStrategy: DiscountApplicationStrategy.First,
  discounts: [],
};

export default /**
* @param {InputQuery} input
* @returns {FunctionResult}
*/
  (input) => {
    // Define a type for your configuration, and parse it from the metafield
    /**
    * @type {{
    *  quantity: number
    *  price: number
    *  checkProduct: boolean
    *  productId: string
    *  percentage: number
    *  userTag: string
    *  checkUser: boolean
    * }}
    */
    const configuration = JSON.parse(
      input?.discountNode?.metafield?.value ?? "{}"
    );
    if (!configuration.quantity || !configuration.percentage) {
      return EMPTY_DISCOUNT;
    }

    var targets;

    if(configuration.checkProduct){
      targets= input.cart.lines
        // Use the configured quantity instead of a hardcoded value
        .filter(line => line.quantity > configuration.quantity && 
          line.merchandise.__typename == "ProductVariant"  &&
          line.merchandise.id == configuration.productId
          )
        .map(line => {
          const variant = /** @type {ProductVariant} */ (line.merchandise);
          return /** @type {Target} */ ({
            productVariant: {
              id: variant.id
            }
          });
        });

    }else{

     targets = input.cart.lines
      // Use the configured quantity instead of a hardcoded value
      .filter(line => line.quantity > configuration.quantity && line.merchandise.__typename == "ProductVariant")
      .map(line => {
        const variant = /** @type {ProductVariant} */ (line.merchandise);
        return /** @type {Target} */ ({
          productVariant: {
            id: variant.id
          }
        });
      });
    }

    if (!targets.length) {
      console.error("No cart lines qualify for volume discount.");
      return EMPTY_DISCOUNT;
    }
    if (configuration.checkUser) {
      if (input.cart.buyerIdentity != null) {
        if (!input.cart.buyerIdentity?.customer?.hasAnyTag) {
          return EMPTY_DISCOUNT;
        } else {
          return {
            discounts: [
              {
                targets,
                value: {
                  percentage: {
                    // Use the configured percentage instead of a hardcoded value
                    value: configuration.percentage.toString()
                  }
                }
              }
            ],
            discountApplicationStrategy: DiscountApplicationStrategy.First
          };
        };
      } else {
        return EMPTY_DISCOUNT;
      }
    }

    else {
      return {
        discounts: [
          {
            targets,
            value: {
              percentage: {
                // Use the configured percentage instead of a hardcoded value
                value: configuration.percentage.toString()
              }
            }
          }
        ],
        discountApplicationStrategy: DiscountApplicationStrategy.First
      };
    }
  };
