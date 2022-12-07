"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneGalleryInstableSprayBuffInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class SceneGalleryInstableSprayBuffInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("SceneGalleryInstableSprayBuffInfo", [
            { no: 3, name: "Unk3300_KKDFLBMKGEF", kind: "scalar", jsonName: "Unk3300KKDFLBMKGEF", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 6, name: "buff_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "Unk3300_EPHAABKNLHC", kind: "scalar", jsonName: "Unk3300EPHAABKNLHC", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { unk3300KKDFLBMKGEF: 0n, buffId: 0, unk3300EPHAABKNLHC: 0n };
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
                case /* uint64 Unk3300_KKDFLBMKGEF = 3 [json_name = "Unk3300KKDFLBMKGEF"];*/ 3:
                    message.unk3300KKDFLBMKGEF = reader.uint64().toBigInt();
                    break;
                case /* uint32 buff_id */ 6:
                    message.buffId = reader.uint32();
                    break;
                case /* uint64 Unk3300_EPHAABKNLHC = 2 [json_name = "Unk3300EPHAABKNLHC"];*/ 2:
                    message.unk3300EPHAABKNLHC = reader.uint64().toBigInt();
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
        /* uint64 Unk3300_KKDFLBMKGEF = 3 [json_name = "Unk3300KKDFLBMKGEF"]; */
        if (message.unk3300KKDFLBMKGEF !== 0n)
            writer.tag(3, runtime_1.WireType.Varint).uint64(message.unk3300KKDFLBMKGEF);
        /* uint32 buff_id = 6; */
        if (message.buffId !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.buffId);
        /* uint64 Unk3300_EPHAABKNLHC = 2 [json_name = "Unk3300EPHAABKNLHC"]; */
        if (message.unk3300EPHAABKNLHC !== 0n)
            writer.tag(2, runtime_1.WireType.Varint).uint64(message.unk3300EPHAABKNLHC);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SceneGalleryInstableSprayBuffInfo
 */
exports.SceneGalleryInstableSprayBuffInfo = new SceneGalleryInstableSprayBuffInfo$Type();
