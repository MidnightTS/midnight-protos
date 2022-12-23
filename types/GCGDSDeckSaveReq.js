"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGDSDeckSaveReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class GCGDSDeckSaveReq$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGDSDeckSaveReq", [
            { no: 4, name: "deck_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "card_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "character_card_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { deckId: 0, cardList: [], characterCardList: [], name: "" };
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
                case /* uint32 deck_id */ 4:
                    message.deckId = reader.uint32();
                    break;
                case /* repeated uint32 card_list */ 11:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.cardList.push(reader.uint32());
                    else
                        message.cardList.push(reader.uint32());
                    break;
                case /* repeated uint32 character_card_list */ 6:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.characterCardList.push(reader.uint32());
                    else
                        message.characterCardList.push(reader.uint32());
                    break;
                case /* string name */ 5:
                    message.name = reader.string();
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
        /* uint32 deck_id = 4; */
        if (message.deckId !== 0)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.deckId);
        /* repeated uint32 card_list = 11; */
        if (message.cardList.length) {
            writer.tag(11, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.cardList.length; i++)
                writer.uint32(message.cardList[i]);
            writer.join();
        }
        /* repeated uint32 character_card_list = 6; */
        if (message.characterCardList.length) {
            writer.tag(6, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.characterCardList.length; i++)
                writer.uint32(message.characterCardList[i]);
            writer.join();
        }
        /* string name = 5; */
        if (message.name !== "")
            writer.tag(5, runtime_2.WireType.LengthDelimited).string(message.name);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGDSDeckSaveReq
 */
exports.GCGDSDeckSaveReq = new GCGDSDeckSaveReq$Type();
