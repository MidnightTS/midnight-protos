"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayProduct = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class PlayProduct$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayProduct", [
            { no: 1, name: "product_id", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "price_tier", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "schedule_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 schedule_id */ 3:
                    message.scheduleId = reader.uint32();
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
        /* optional uint32 schedule_id = 3; */
        if (message.scheduleId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.scheduleId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayProduct
 */
exports.PlayProduct = new PlayProduct$Type();
