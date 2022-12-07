"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemAddHintNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
const ItemHint_1 = require("./ItemHint");
// @generated message type with reflection information, may provide speed optimized methods
class ItemAddHintNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("ItemAddHintNotify", [
            { no: 5, name: "Unk3300_FLIKEBJINCL", kind: "scalar", jsonName: "Unk3300FLIKEBJINCL", T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "Unk3300_NIJLGEHNBNC", kind: "scalar", jsonName: "Unk3300NIJLGEHNBNC", T: 8 /*ScalarType.BOOL*/ },
            { no: 11, name: "item_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ItemHint_1.ItemHint },
            { no: 1, name: "overflow_transformed_item_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ItemHint_1.ItemHint },
            { no: 6, name: "Unk3300_KIOMJNHFMDE", kind: "scalar", jsonName: "Unk3300KIOMJNHFMDE", T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "reason", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "position", kind: "message", T: () => Vector_1.Vector },
            { no: 3, name: "quest_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300FLIKEBJINCL: false, unk3300NIJLGEHNBNC: false, itemList: [], overflowTransformedItemList: [], unk3300KIOMJNHFMDE: false, reason: 0, questId: 0 };
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
                case /* bool Unk3300_FLIKEBJINCL = 5 [json_name = "Unk3300FLIKEBJINCL"];*/ 5:
                    message.unk3300FLIKEBJINCL = reader.bool();
                    break;
                case /* bool Unk3300_NIJLGEHNBNC = 4 [json_name = "Unk3300NIJLGEHNBNC"];*/ 4:
                    message.unk3300NIJLGEHNBNC = reader.bool();
                    break;
                case /* repeated ItemHint item_list */ 11:
                    message.itemList.push(ItemHint_1.ItemHint.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated ItemHint overflow_transformed_item_list */ 1:
                    message.overflowTransformedItemList.push(ItemHint_1.ItemHint.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* bool Unk3300_KIOMJNHFMDE = 6 [json_name = "Unk3300KIOMJNHFMDE"];*/ 6:
                    message.unk3300KIOMJNHFMDE = reader.bool();
                    break;
                case /* uint32 reason */ 14:
                    message.reason = reader.uint32();
                    break;
                case /* Vector position */ 12:
                    message.position = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.position);
                    break;
                case /* uint32 quest_id */ 3:
                    message.questId = reader.uint32();
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
        /* bool Unk3300_FLIKEBJINCL = 5 [json_name = "Unk3300FLIKEBJINCL"]; */
        if (message.unk3300FLIKEBJINCL !== false)
            writer.tag(5, runtime_1.WireType.Varint).bool(message.unk3300FLIKEBJINCL);
        /* bool Unk3300_NIJLGEHNBNC = 4 [json_name = "Unk3300NIJLGEHNBNC"]; */
        if (message.unk3300NIJLGEHNBNC !== false)
            writer.tag(4, runtime_1.WireType.Varint).bool(message.unk3300NIJLGEHNBNC);
        /* repeated ItemHint item_list = 11; */
        for (let i = 0; i < message.itemList.length; i++)
            ItemHint_1.ItemHint.internalBinaryWrite(message.itemList[i], writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated ItemHint overflow_transformed_item_list = 1; */
        for (let i = 0; i < message.overflowTransformedItemList.length; i++)
            ItemHint_1.ItemHint.internalBinaryWrite(message.overflowTransformedItemList[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool Unk3300_KIOMJNHFMDE = 6 [json_name = "Unk3300KIOMJNHFMDE"]; */
        if (message.unk3300KIOMJNHFMDE !== false)
            writer.tag(6, runtime_1.WireType.Varint).bool(message.unk3300KIOMJNHFMDE);
        /* uint32 reason = 14; */
        if (message.reason !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.reason);
        /* Vector position = 12; */
        if (message.position)
            Vector_1.Vector.internalBinaryWrite(message.position, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 quest_id = 3; */
        if (message.questId !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.questId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ItemAddHintNotify
 */
exports.ItemAddHintNotify = new ItemAddHintNotify$Type();
