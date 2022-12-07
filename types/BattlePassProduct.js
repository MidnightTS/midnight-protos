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
            { no: 12, name: "Unk3300_AOMGCJOGGED", kind: "scalar", jsonName: "Unk3300AOMGCJOGGED", T: 9 /*ScalarType.STRING*/ },
            { no: 9, name: "Unk3300_NHOAGMGNEIM", kind: "scalar", jsonName: "Unk3300NHOAGMGNEIM", T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "Unk3300_NIEBADLADMK", kind: "scalar", jsonName: "Unk3300NIEBADLADMK", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { unk3300AOMGCJOGGED: "", unk3300NHOAGMGNEIM: "", unk3300NIEBADLADMK: "" };
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
                case /* string Unk3300_AOMGCJOGGED = 12 [json_name = "Unk3300AOMGCJOGGED"];*/ 12:
                    message.unk3300AOMGCJOGGED = reader.string();
                    break;
                case /* string Unk3300_NHOAGMGNEIM = 9 [json_name = "Unk3300NHOAGMGNEIM"];*/ 9:
                    message.unk3300NHOAGMGNEIM = reader.string();
                    break;
                case /* string Unk3300_NIEBADLADMK = 7 [json_name = "Unk3300NIEBADLADMK"];*/ 7:
                    message.unk3300NIEBADLADMK = reader.string();
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
        /* string Unk3300_AOMGCJOGGED = 12 [json_name = "Unk3300AOMGCJOGGED"]; */
        if (message.unk3300AOMGCJOGGED !== "")
            writer.tag(12, runtime_1.WireType.LengthDelimited).string(message.unk3300AOMGCJOGGED);
        /* string Unk3300_NHOAGMGNEIM = 9 [json_name = "Unk3300NHOAGMGNEIM"]; */
        if (message.unk3300NHOAGMGNEIM !== "")
            writer.tag(9, runtime_1.WireType.LengthDelimited).string(message.unk3300NHOAGMGNEIM);
        /* string Unk3300_NIEBADLADMK = 7 [json_name = "Unk3300NIEBADLADMK"]; */
        if (message.unk3300NIEBADLADMK !== "")
            writer.tag(7, runtime_1.WireType.LengthDelimited).string(message.unk3300NIEBADLADMK);
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
