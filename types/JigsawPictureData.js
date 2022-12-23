"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JigsawPictureData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class JigsawPictureData$Type extends runtime_5.MessageType {
    constructor() {
        super("JigsawPictureData", [
            { no: 10, name: "Unk3300_DFGHKDBENED", kind: "scalar", jsonName: "Unk3300DFGHKDBENED", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "Unk3300_FIKPLGJIBGP", kind: "scalar", jsonName: "Unk3300FIKPLGJIBGP", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "is_finished", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "is_open", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { unk3300DFGHKDBENED: 0, unk3300FIKPLGJIBGP: 0, isFinished: false, isOpen: false };
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
                case /* uint32 Unk3300_DFGHKDBENED = 10 [json_name = "Unk3300DFGHKDBENED"];*/ 10:
                    message.unk3300DFGHKDBENED = reader.uint32();
                    break;
                case /* uint32 Unk3300_FIKPLGJIBGP = 5 [json_name = "Unk3300FIKPLGJIBGP"];*/ 5:
                    message.unk3300FIKPLGJIBGP = reader.uint32();
                    break;
                case /* bool is_finished */ 7:
                    message.isFinished = reader.bool();
                    break;
                case /* bool is_open */ 14:
                    message.isOpen = reader.bool();
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
        /* uint32 Unk3300_DFGHKDBENED = 10 [json_name = "Unk3300DFGHKDBENED"]; */
        if (message.unk3300DFGHKDBENED !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.unk3300DFGHKDBENED);
        /* uint32 Unk3300_FIKPLGJIBGP = 5 [json_name = "Unk3300FIKPLGJIBGP"]; */
        if (message.unk3300FIKPLGJIBGP !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.unk3300FIKPLGJIBGP);
        /* bool is_finished = 7; */
        if (message.isFinished !== false)
            writer.tag(7, runtime_1.WireType.Varint).bool(message.isFinished);
        /* bool is_open = 14; */
        if (message.isOpen !== false)
            writer.tag(14, runtime_1.WireType.Varint).bool(message.isOpen);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message JigsawPictureData
 */
exports.JigsawPictureData = new JigsawPictureData$Type();
