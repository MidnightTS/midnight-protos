"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGOperationPlayCard = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class GCGOperationPlayCard$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGOperationPlayCard", [
            { no: 8, name: "replace_card_guid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "target_card_guid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "card_guid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "cost_dice_index_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { replaceCardGuid: 0, targetCardGuidList: [], cardGuid: 0, costDiceIndexList: [] };
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
                case /* uint32 replace_card_guid */ 8:
                    message.replaceCardGuid = reader.uint32();
                    break;
                case /* repeated uint32 target_card_guid_list */ 14:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.targetCardGuidList.push(reader.uint32());
                    else
                        message.targetCardGuidList.push(reader.uint32());
                    break;
                case /* uint32 card_guid */ 1:
                    message.cardGuid = reader.uint32();
                    break;
                case /* repeated uint32 cost_dice_index_list */ 11:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.costDiceIndexList.push(reader.uint32());
                    else
                        message.costDiceIndexList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 replace_card_guid = 8; */
        if (message.replaceCardGuid !== 0)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.replaceCardGuid);
        /* repeated uint32 target_card_guid_list = 14; */
        if (message.targetCardGuidList.length) {
            writer.tag(14, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.targetCardGuidList.length; i++)
                writer.uint32(message.targetCardGuidList[i]);
            writer.join();
        }
        /* uint32 card_guid = 1; */
        if (message.cardGuid !== 0)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.cardGuid);
        /* repeated uint32 cost_dice_index_list = 11; */
        if (message.costDiceIndexList.length) {
            writer.tag(11, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.costDiceIndexList.length; i++)
                writer.uint32(message.costDiceIndexList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGOperationPlayCard
 */
exports.GCGOperationPlayCard = new GCGOperationPlayCard$Type();
