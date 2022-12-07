"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetScenePerformanceRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class GetScenePerformanceRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("GetScenePerformanceRsp", [
            { no: 1, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "Unk3300_GLNFIFPNJIE", kind: "scalar", jsonName: "Unk3300GLNFIFPNJIE", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "Unk3300_IHBPCPCJIBC", kind: "scalar", jsonName: "Unk3300IHBPCPCJIBC", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "Unk3300_MMALJIFDKJK", kind: "scalar", jsonName: "Unk3300MMALJIFDKJK", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "Unk3300_PDPJEMEKHKD", kind: "scalar", jsonName: "Unk3300PDPJEMEKHKD", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "Unk3300_LIOFGAHKNIA", kind: "scalar", jsonName: "Unk3300LIOFGAHKNIA", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "Unk3300_MIJMKLBGKML", kind: "scalar", jsonName: "Unk3300MIJMKLBGKML", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "Unk3300_JMLJLNKLJNP", kind: "scalar", jsonName: "Unk3300JMLJLNKLJNP", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "pos", kind: "message", T: () => Vector_1.Vector }
        ]);
    }
    create(value) {
        const message = { retcode: 0, unk3300GLNFIFPNJIE: 0, unk3300IHBPCPCJIBC: 0, unk3300MMALJIFDKJK: 0, unk3300PDPJEMEKHKD: 0, unk3300LIOFGAHKNIA: 0, unk3300MIJMKLBGKML: 0, unk3300JMLJLNKLJNP: 0 };
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
                case /* int32 retcode */ 1:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 Unk3300_GLNFIFPNJIE = 4 [json_name = "Unk3300GLNFIFPNJIE"];*/ 4:
                    message.unk3300GLNFIFPNJIE = reader.uint32();
                    break;
                case /* uint32 Unk3300_IHBPCPCJIBC = 2 [json_name = "Unk3300IHBPCPCJIBC"];*/ 2:
                    message.unk3300IHBPCPCJIBC = reader.uint32();
                    break;
                case /* uint32 Unk3300_MMALJIFDKJK = 13 [json_name = "Unk3300MMALJIFDKJK"];*/ 13:
                    message.unk3300MMALJIFDKJK = reader.uint32();
                    break;
                case /* uint32 Unk3300_PDPJEMEKHKD = 10 [json_name = "Unk3300PDPJEMEKHKD"];*/ 10:
                    message.unk3300PDPJEMEKHKD = reader.uint32();
                    break;
                case /* uint32 Unk3300_LIOFGAHKNIA = 14 [json_name = "Unk3300LIOFGAHKNIA"];*/ 14:
                    message.unk3300LIOFGAHKNIA = reader.uint32();
                    break;
                case /* uint32 Unk3300_MIJMKLBGKML = 11 [json_name = "Unk3300MIJMKLBGKML"];*/ 11:
                    message.unk3300MIJMKLBGKML = reader.uint32();
                    break;
                case /* uint32 Unk3300_JMLJLNKLJNP = 15 [json_name = "Unk3300JMLJLNKLJNP"];*/ 15:
                    message.unk3300JMLJLNKLJNP = reader.uint32();
                    break;
                case /* Vector pos */ 9:
                    message.pos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
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
        /* int32 retcode = 1; */
        if (message.retcode !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.retcode);
        /* uint32 Unk3300_GLNFIFPNJIE = 4 [json_name = "Unk3300GLNFIFPNJIE"]; */
        if (message.unk3300GLNFIFPNJIE !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.unk3300GLNFIFPNJIE);
        /* uint32 Unk3300_IHBPCPCJIBC = 2 [json_name = "Unk3300IHBPCPCJIBC"]; */
        if (message.unk3300IHBPCPCJIBC !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.unk3300IHBPCPCJIBC);
        /* uint32 Unk3300_MMALJIFDKJK = 13 [json_name = "Unk3300MMALJIFDKJK"]; */
        if (message.unk3300MMALJIFDKJK !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.unk3300MMALJIFDKJK);
        /* uint32 Unk3300_PDPJEMEKHKD = 10 [json_name = "Unk3300PDPJEMEKHKD"]; */
        if (message.unk3300PDPJEMEKHKD !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.unk3300PDPJEMEKHKD);
        /* uint32 Unk3300_LIOFGAHKNIA = 14 [json_name = "Unk3300LIOFGAHKNIA"]; */
        if (message.unk3300LIOFGAHKNIA !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.unk3300LIOFGAHKNIA);
        /* uint32 Unk3300_MIJMKLBGKML = 11 [json_name = "Unk3300MIJMKLBGKML"]; */
        if (message.unk3300MIJMKLBGKML !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.unk3300MIJMKLBGKML);
        /* uint32 Unk3300_JMLJLNKLJNP = 15 [json_name = "Unk3300JMLJLNKLJNP"]; */
        if (message.unk3300JMLJLNKLJNP !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.unk3300JMLJLNKLJNP);
        /* Vector pos = 9; */
        if (message.pos)
            Vector_1.Vector.internalBinaryWrite(message.pos, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetScenePerformanceRsp
 */
exports.GetScenePerformanceRsp = new GetScenePerformanceRsp$Type();
