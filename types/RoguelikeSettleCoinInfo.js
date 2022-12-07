"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoguelikeSettleCoinInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class RoguelikeSettleCoinInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("RoguelikeSettleCoinInfo", [
            { no: 10, name: "Unk3300_MFKOIMONCLA", kind: "scalar", jsonName: "Unk3300MFKOIMONCLA", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "Unk3300_LFEKGBBAMHE", kind: "scalar", jsonName: "Unk3300LFEKGBBAMHE", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "coin_c", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300MFKOIMONCLA: 0, unk3300LFEKGBBAMHE: 0, coinC: 0 };
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
                case /* uint32 Unk3300_MFKOIMONCLA = 10 [json_name = "Unk3300MFKOIMONCLA"];*/ 10:
                    message.unk3300MFKOIMONCLA = reader.uint32();
                    break;
                case /* uint32 Unk3300_LFEKGBBAMHE = 12 [json_name = "Unk3300LFEKGBBAMHE"];*/ 12:
                    message.unk3300LFEKGBBAMHE = reader.uint32();
                    break;
                case /* uint32 coin_c */ 6:
                    message.coinC = reader.uint32();
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
        /* uint32 Unk3300_MFKOIMONCLA = 10 [json_name = "Unk3300MFKOIMONCLA"]; */
        if (message.unk3300MFKOIMONCLA !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.unk3300MFKOIMONCLA);
        /* uint32 Unk3300_LFEKGBBAMHE = 12 [json_name = "Unk3300LFEKGBBAMHE"]; */
        if (message.unk3300LFEKGBBAMHE !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.unk3300LFEKGBBAMHE);
        /* uint32 coin_c = 6; */
        if (message.coinC !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.coinC);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message RoguelikeSettleCoinInfo
 */
exports.RoguelikeSettleCoinInfo = new RoguelikeSettleCoinInfo$Type();
