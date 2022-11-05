"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopMcoinProduct = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ShopMcoinProduct$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ShopMcoinProduct", [
            { no: 1, name: "product_id", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "price_tier", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "mcoin_base", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "mcoin_non_first", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "mcoin_first", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "bought_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "is_audit", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional string product_id */ 1:
                    message.productId = reader.string();
                    break;
                case /* optional string price_tier */ 2:
                    message.priceTier = reader.string();
                    break;
                case /* optional uint32 mcoin_base */ 3:
                    message.mcoinBase = reader.uint32();
                    break;
                case /* optional uint32 mcoin_non_first */ 4:
                    message.mcoinNonFirst = reader.uint32();
                    break;
                case /* optional uint32 mcoin_first */ 5:
                    message.mcoinFirst = reader.uint32();
                    break;
                case /* optional uint32 bought_num */ 6:
                    message.boughtNum = reader.uint32();
                    break;
                case /* optional bool is_audit */ 7:
                    message.isAudit = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional string product_id = 1; */
        if (message.productId !== undefined)
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.productId);
        /* optional string price_tier = 2; */
        if (message.priceTier !== undefined)
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.priceTier);
        /* optional uint32 mcoin_base = 3; */
        if (message.mcoinBase !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.mcoinBase);
        /* optional uint32 mcoin_non_first = 4; */
        if (message.mcoinNonFirst !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.mcoinNonFirst);
        /* optional uint32 mcoin_first = 5; */
        if (message.mcoinFirst !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.mcoinFirst);
        /* optional uint32 bought_num = 6; */
        if (message.boughtNum !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.boughtNum);
        /* optional bool is_audit = 7; */
        if (message.isAudit !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).bool(message.isAudit);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ShopMcoinProduct
 */
exports.ShopMcoinProduct = new ShopMcoinProduct$Type();
