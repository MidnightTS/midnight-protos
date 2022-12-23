"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BattlePassBuySuccNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ItemParam_1 = require("./ItemParam");
// @generated message type with reflection information, may provide speed optimized methods
class BattlePassBuySuccNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("BattlePassBuySuccNotify", [
            { no: 4, name: "Unk3300_PJODFJKAFLG", kind: "scalar", jsonName: "Unk3300PJODFJKAFLG", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "Unk3300_IJOIKKDNKDE", kind: "scalar", jsonName: "Unk3300IJOIKKDNKDE", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "schedule_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "item_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ItemParam_1.ItemParam }
        ]);
    }
    create(value) {
        const message = { unk3300PJODFJKAFLG: 0, unk3300IJOIKKDNKDE: 0, scheduleId: 0, itemList: [] };
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
                case /* uint32 Unk3300_PJODFJKAFLG = 4 [json_name = "Unk3300PJODFJKAFLG"];*/ 4:
                    message.unk3300PJODFJKAFLG = reader.uint32();
                    break;
                case /* uint32 Unk3300_IJOIKKDNKDE = 9 [json_name = "Unk3300IJOIKKDNKDE"];*/ 9:
                    message.unk3300IJOIKKDNKDE = reader.uint32();
                    break;
                case /* uint32 schedule_id */ 11:
                    message.scheduleId = reader.uint32();
                    break;
                case /* repeated ItemParam item_list */ 10:
                    message.itemList.push(ItemParam_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
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
        /* uint32 Unk3300_PJODFJKAFLG = 4 [json_name = "Unk3300PJODFJKAFLG"]; */
        if (message.unk3300PJODFJKAFLG !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.unk3300PJODFJKAFLG);
        /* uint32 Unk3300_IJOIKKDNKDE = 9 [json_name = "Unk3300IJOIKKDNKDE"]; */
        if (message.unk3300IJOIKKDNKDE !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.unk3300IJOIKKDNKDE);
        /* uint32 schedule_id = 11; */
        if (message.scheduleId !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.scheduleId);
        /* repeated ItemParam item_list = 10; */
        for (let i = 0; i < message.itemList.length; i++)
            ItemParam_1.ItemParam.internalBinaryWrite(message.itemList[i], writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BattlePassBuySuccNotify
 */
exports.BattlePassBuySuccNotify = new BattlePassBuySuccNotify$Type();
