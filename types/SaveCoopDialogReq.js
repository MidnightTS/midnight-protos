"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveCoopDialogReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class SaveCoopDialogReq$Type extends runtime_5.MessageType {
    constructor() {
        super("SaveCoopDialogReq", [
            { no: 10, name: "Unk3300_AMKDDJEPAKM", kind: "scalar", jsonName: "Unk3300AMKDDJEPAKM", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "Unk3300_KMBGNIICNAF", kind: "scalar", jsonName: "Unk3300KMBGNIICNAF", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300AMKDDJEPAKM: 0, unk3300KMBGNIICNAF: 0 };
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
                case /* uint32 Unk3300_AMKDDJEPAKM = 10 [json_name = "Unk3300AMKDDJEPAKM"];*/ 10:
                    message.unk3300AMKDDJEPAKM = reader.uint32();
                    break;
                case /* uint32 Unk3300_KMBGNIICNAF = 8 [json_name = "Unk3300KMBGNIICNAF"];*/ 8:
                    message.unk3300KMBGNIICNAF = reader.uint32();
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
        /* uint32 Unk3300_AMKDDJEPAKM = 10 [json_name = "Unk3300AMKDDJEPAKM"]; */
        if (message.unk3300AMKDDJEPAKM !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.unk3300AMKDDJEPAKM);
        /* uint32 Unk3300_KMBGNIICNAF = 8 [json_name = "Unk3300KMBGNIICNAF"]; */
        if (message.unk3300KMBGNIICNAF !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.unk3300KMBGNIICNAF);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SaveCoopDialogReq
 */
exports.SaveCoopDialogReq = new SaveCoopDialogReq$Type();
