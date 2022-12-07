"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGDSDeckData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class GCGDSDeckData$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGDSDeckData", [
            { no: 5, name: "create_time", kind: "scalar", T: 7 /*ScalarType.FIXED32*/ },
            { no: 13, name: "field_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "card_back_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "card_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "character_card_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 15, name: "is_valid", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { createTime: 0, fieldId: 0, cardBackId: 0, cardList: [], characterCardList: [], id: 0, name: "", isValid: false };
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
                case /* fixed32 create_time */ 5:
                    message.createTime = reader.fixed32();
                    break;
                case /* uint32 field_id */ 13:
                    message.fieldId = reader.uint32();
                    break;
                case /* uint32 card_back_id */ 9:
                    message.cardBackId = reader.uint32();
                    break;
                case /* repeated uint32 card_list */ 1:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.cardList.push(reader.uint32());
                    else
                        message.cardList.push(reader.uint32());
                    break;
                case /* repeated uint32 character_card_list */ 7:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.characterCardList.push(reader.uint32());
                    else
                        message.characterCardList.push(reader.uint32());
                    break;
                case /* uint32 id */ 12:
                    message.id = reader.uint32();
                    break;
                case /* string name */ 10:
                    message.name = reader.string();
                    break;
                case /* bool is_valid */ 15:
                    message.isValid = reader.bool();
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
        /* fixed32 create_time = 5; */
        if (message.createTime !== 0)
            writer.tag(5, runtime_2.WireType.Bit32).fixed32(message.createTime);
        /* uint32 field_id = 13; */
        if (message.fieldId !== 0)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.fieldId);
        /* uint32 card_back_id = 9; */
        if (message.cardBackId !== 0)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.cardBackId);
        /* repeated uint32 card_list = 1; */
        if (message.cardList.length) {
            writer.tag(1, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.cardList.length; i++)
                writer.uint32(message.cardList[i]);
            writer.join();
        }
        /* repeated uint32 character_card_list = 7; */
        if (message.characterCardList.length) {
            writer.tag(7, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.characterCardList.length; i++)
                writer.uint32(message.characterCardList[i]);
            writer.join();
        }
        /* uint32 id = 12; */
        if (message.id !== 0)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.id);
        /* string name = 10; */
        if (message.name !== "")
            writer.tag(10, runtime_2.WireType.LengthDelimited).string(message.name);
        /* bool is_valid = 15; */
        if (message.isValid !== false)
            writer.tag(15, runtime_2.WireType.Varint).bool(message.isValid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGDSDeckData
 */
exports.GCGDSDeckData = new GCGDSDeckData$Type();
