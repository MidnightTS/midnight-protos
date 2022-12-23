"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGDSDataNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GCGDSCardData_1 = require("./GCGDSCardData");
const GCGDSDeckData_1 = require("./GCGDSDeckData");
// @generated message type with reflection information, may provide speed optimized methods
class GCGDSDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGDSDataNotify", [
            { no: 8, name: "cur_deck_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "deck_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GCGDSDeckData_1.GCGDSDeckData },
            { no: 10, name: "unlock_card_back_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "card_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GCGDSCardData_1.GCGDSCardData },
            { no: 5, name: "unlock_field_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "unlock_deck_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { curDeckId: 0, deckList: [], unlockCardBackIdList: [], cardList: [], unlockFieldIdList: [], unlockDeckIdList: [] };
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
                case /* uint32 cur_deck_id */ 8:
                    message.curDeckId = reader.uint32();
                    break;
                case /* repeated GCGDSDeckData deck_list */ 3:
                    message.deckList.push(GCGDSDeckData_1.GCGDSDeckData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated uint32 unlock_card_back_id_list */ 10:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unlockCardBackIdList.push(reader.uint32());
                    else
                        message.unlockCardBackIdList.push(reader.uint32());
                    break;
                case /* repeated GCGDSCardData card_list */ 9:
                    message.cardList.push(GCGDSCardData_1.GCGDSCardData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated uint32 unlock_field_id_list */ 5:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unlockFieldIdList.push(reader.uint32());
                    else
                        message.unlockFieldIdList.push(reader.uint32());
                    break;
                case /* repeated uint32 unlock_deck_id_list */ 6:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unlockDeckIdList.push(reader.uint32());
                    else
                        message.unlockDeckIdList.push(reader.uint32());
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
        /* uint32 cur_deck_id = 8; */
        if (message.curDeckId !== 0)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.curDeckId);
        /* repeated GCGDSDeckData deck_list = 3; */
        for (let i = 0; i < message.deckList.length; i++)
            GCGDSDeckData_1.GCGDSDeckData.internalBinaryWrite(message.deckList[i], writer.tag(3, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 unlock_card_back_id_list = 10; */
        if (message.unlockCardBackIdList.length) {
            writer.tag(10, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unlockCardBackIdList.length; i++)
                writer.uint32(message.unlockCardBackIdList[i]);
            writer.join();
        }
        /* repeated GCGDSCardData card_list = 9; */
        for (let i = 0; i < message.cardList.length; i++)
            GCGDSCardData_1.GCGDSCardData.internalBinaryWrite(message.cardList[i], writer.tag(9, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 unlock_field_id_list = 5; */
        if (message.unlockFieldIdList.length) {
            writer.tag(5, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unlockFieldIdList.length; i++)
                writer.uint32(message.unlockFieldIdList[i]);
            writer.join();
        }
        /* repeated uint32 unlock_deck_id_list = 6; */
        if (message.unlockDeckIdList.length) {
            writer.tag(6, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unlockDeckIdList.length; i++)
                writer.uint32(message.unlockDeckIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGDSDataNotify
 */
exports.GCGDSDataNotify = new GCGDSDataNotify$Type();
