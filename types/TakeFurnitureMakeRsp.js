"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TakeFurnitureMakeRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const FurnitureMakeSlot_1 = require("./FurnitureMakeSlot");
const ItemParam_1 = require("./ItemParam");
// @generated message type with reflection information, may provide speed optimized methods
class TakeFurnitureMakeRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("TakeFurnitureMakeRsp", [
            { no: 15, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 5, name: "Unk3300_JDHFPCBOGFH", kind: "message", jsonName: "Unk3300JDHFPCBOGFH", repeat: 1 /*RepeatType.PACKED*/, T: () => ItemParam_1.ItemParam },
            { no: 14, name: "furniture_make_slot", kind: "message", T: () => FurnitureMakeSlot_1.FurnitureMakeSlot },
            { no: 10, name: "Unk3300_EOLDJAMHDHM", kind: "message", jsonName: "Unk3300EOLDJAMHDHM", repeat: 1 /*RepeatType.PACKED*/, T: () => ItemParam_1.ItemParam },
            { no: 3, name: "make_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { retcode: 0, unk3300JDHFPCBOGFH: [], unk3300EOLDJAMHDHM: [], makeId: 0 };
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
                case /* int32 retcode */ 15:
                    message.retcode = reader.int32();
                    break;
                case /* repeated ItemParam Unk3300_JDHFPCBOGFH = 5 [json_name = "Unk3300JDHFPCBOGFH"];*/ 5:
                    message.unk3300JDHFPCBOGFH.push(ItemParam_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* FurnitureMakeSlot furniture_make_slot */ 14:
                    message.furnitureMakeSlot = FurnitureMakeSlot_1.FurnitureMakeSlot.internalBinaryRead(reader, reader.uint32(), options, message.furnitureMakeSlot);
                    break;
                case /* repeated ItemParam Unk3300_EOLDJAMHDHM = 10 [json_name = "Unk3300EOLDJAMHDHM"];*/ 10:
                    message.unk3300EOLDJAMHDHM.push(ItemParam_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 make_id */ 3:
                    message.makeId = reader.uint32();
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
        /* int32 retcode = 15; */
        if (message.retcode !== 0)
            writer.tag(15, runtime_1.WireType.Varint).int32(message.retcode);
        /* repeated ItemParam Unk3300_JDHFPCBOGFH = 5 [json_name = "Unk3300JDHFPCBOGFH"]; */
        for (let i = 0; i < message.unk3300JDHFPCBOGFH.length; i++)
            ItemParam_1.ItemParam.internalBinaryWrite(message.unk3300JDHFPCBOGFH[i], writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* FurnitureMakeSlot furniture_make_slot = 14; */
        if (message.furnitureMakeSlot)
            FurnitureMakeSlot_1.FurnitureMakeSlot.internalBinaryWrite(message.furnitureMakeSlot, writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated ItemParam Unk3300_EOLDJAMHDHM = 10 [json_name = "Unk3300EOLDJAMHDHM"]; */
        for (let i = 0; i < message.unk3300EOLDJAMHDHM.length; i++)
            ItemParam_1.ItemParam.internalBinaryWrite(message.unk3300EOLDJAMHDHM[i], writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 make_id = 3; */
        if (message.makeId !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.makeId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message TakeFurnitureMakeRsp
 */
exports.TakeFurnitureMakeRsp = new TakeFurnitureMakeRsp$Type();
