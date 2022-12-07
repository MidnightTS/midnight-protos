"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinterCampAcceptItemResultInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ItemParam_1 = require("./ItemParam");
// @generated message type with reflection information, may provide speed optimized methods
class WinterCampAcceptItemResultInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("WinterCampAcceptItemResultInfo", [
            { no: 15, name: "Unk3300_ILELLFNPDFJ", kind: "message", jsonName: "Unk3300ILELLFNPDFJ", repeat: 1 /*RepeatType.PACKED*/, T: () => ItemParam_1.ItemParam },
            { no: 13, name: "Unk3300_JHKOMCFHAOG", kind: "message", jsonName: "Unk3300JHKOMCFHAOG", repeat: 1 /*RepeatType.PACKED*/, T: () => ItemParam_1.ItemParam },
            { no: 9, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300ILELLFNPDFJ: [], unk3300JHKOMCFHAOG: [], uid: 0 };
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
                case /* repeated ItemParam Unk3300_ILELLFNPDFJ = 15 [json_name = "Unk3300ILELLFNPDFJ"];*/ 15:
                    message.unk3300ILELLFNPDFJ.push(ItemParam_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated ItemParam Unk3300_JHKOMCFHAOG = 13 [json_name = "Unk3300JHKOMCFHAOG"];*/ 13:
                    message.unk3300JHKOMCFHAOG.push(ItemParam_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 uid */ 9:
                    message.uid = reader.uint32();
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
        /* repeated ItemParam Unk3300_ILELLFNPDFJ = 15 [json_name = "Unk3300ILELLFNPDFJ"]; */
        for (let i = 0; i < message.unk3300ILELLFNPDFJ.length; i++)
            ItemParam_1.ItemParam.internalBinaryWrite(message.unk3300ILELLFNPDFJ[i], writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated ItemParam Unk3300_JHKOMCFHAOG = 13 [json_name = "Unk3300JHKOMCFHAOG"]; */
        for (let i = 0; i < message.unk3300JHKOMCFHAOG.length; i++)
            ItemParam_1.ItemParam.internalBinaryWrite(message.unk3300JHKOMCFHAOG[i], writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 uid = 9; */
        if (message.uid !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.uid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message WinterCampAcceptItemResultInfo
 */
exports.WinterCampAcceptItemResultInfo = new WinterCampAcceptItemResultInfo$Type();
