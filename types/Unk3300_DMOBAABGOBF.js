"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unk3300_DMOBAABGOBF = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class Unk3300_DMOBAABGOBF$Type extends runtime_5.MessageType {
    constructor() {
        super("Unk3300_DMOBAABGOBF", [
            { no: 6, name: "is_success", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "Unk3300_NKHMMPMEILJ", kind: "scalar", jsonName: "Unk3300NKHMMPMEILJ", T: 9 /*ScalarType.STRING*/ },
            { no: 13, name: "Unk3300_JOCKIGCENGI", kind: "scalar", jsonName: "Unk3300JOCKIGCENGI", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { isSuccess: false, unk3300NKHMMPMEILJ: "", unk3300JOCKIGCENGI: "" };
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
                case /* bool is_success */ 6:
                    message.isSuccess = reader.bool();
                    break;
                case /* string Unk3300_NKHMMPMEILJ = 7 [json_name = "Unk3300NKHMMPMEILJ"];*/ 7:
                    message.unk3300NKHMMPMEILJ = reader.string();
                    break;
                case /* string Unk3300_JOCKIGCENGI = 13 [json_name = "Unk3300JOCKIGCENGI"];*/ 13:
                    message.unk3300JOCKIGCENGI = reader.string();
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
        /* bool is_success = 6; */
        if (message.isSuccess !== false)
            writer.tag(6, runtime_1.WireType.Varint).bool(message.isSuccess);
        /* string Unk3300_NKHMMPMEILJ = 7 [json_name = "Unk3300NKHMMPMEILJ"]; */
        if (message.unk3300NKHMMPMEILJ !== "")
            writer.tag(7, runtime_1.WireType.LengthDelimited).string(message.unk3300NKHMMPMEILJ);
        /* string Unk3300_JOCKIGCENGI = 13 [json_name = "Unk3300JOCKIGCENGI"]; */
        if (message.unk3300JOCKIGCENGI !== "")
            writer.tag(13, runtime_1.WireType.LengthDelimited).string(message.unk3300JOCKIGCENGI);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Unk3300_DMOBAABGOBF
 */
exports.Unk3300_DMOBAABGOBF = new Unk3300_DMOBAABGOBF$Type();
