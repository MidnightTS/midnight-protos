"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BattlePassProduct = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class BattlePassProduct$Type extends runtime_5.MessageType {
    constructor() {
        super("BattlePassProduct", [
            { no: 12, name: "extra_product_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 9, name: "normal_product_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "upgrade_product_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { extraProductId: "", normalProductId: "", upgradeProductId: "" };
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
                case /* string extra_product_id */ 12:
                    message.extraProductId = reader.string();
                    break;
                case /* string normal_product_id */ 9:
                    message.normalProductId = reader.string();
                    break;
                case /* string upgrade_product_id */ 7:
                    message.upgradeProductId = reader.string();
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
        /* string extra_product_id = 12; */
        if (message.extraProductId !== "")
            writer.tag(12, runtime_1.WireType.LengthDelimited).string(message.extraProductId);
        /* string normal_product_id = 9; */
        if (message.normalProductId !== "")
            writer.tag(9, runtime_1.WireType.LengthDelimited).string(message.normalProductId);
        /* string upgrade_product_id = 7; */
        if (message.upgradeProductId !== "")
            writer.tag(7, runtime_1.WireType.LengthDelimited).string(message.upgradeProductId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BattlePassProduct
 */
exports.BattlePassProduct = new BattlePassProduct$Type();
