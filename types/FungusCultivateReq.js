"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FungusCultivateReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class FungusCultivateReq$Type extends runtime_5.MessageType {
    constructor() {
        super("FungusCultivateReq", [
            { no: 1, name: "Unk3300_IOANLJBMBAI", kind: "scalar", jsonName: "Unk3300IOANLJBMBAI", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "Unk3300_DJEGJDACDEF", kind: "scalar", jsonName: "Unk3300DJEGJDACDEF", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "Unk3300_IMEGFNOLDCE", kind: "scalar", jsonName: "Unk3300IMEGFNOLDCE", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "Unk3300_PGJKEICFKLL", kind: "scalar", jsonName: "Unk3300PGJKEICFKLL", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "Unk3300_MBPLICBFAGL", kind: "scalar", jsonName: "Unk3300MBPLICBFAGL", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "cultivate_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "Unk3300_AEGCNHLOPEP", kind: "scalar", jsonName: "Unk3300AEGCNHLOPEP", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300IOANLJBMBAI: 0, unk3300DJEGJDACDEF: 0, unk3300IMEGFNOLDCE: 0, unk3300PGJKEICFKLL: 0, unk3300MBPLICBFAGL: 0, cultivateId: 0, time: 0, unk3300AEGCNHLOPEP: 0 };
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
                case /* uint32 Unk3300_IOANLJBMBAI = 1 [json_name = "Unk3300IOANLJBMBAI"];*/ 1:
                    message.unk3300IOANLJBMBAI = reader.uint32();
                    break;
                case /* uint32 Unk3300_DJEGJDACDEF = 6 [json_name = "Unk3300DJEGJDACDEF"];*/ 6:
                    message.unk3300DJEGJDACDEF = reader.uint32();
                    break;
                case /* uint32 Unk3300_IMEGFNOLDCE = 2 [json_name = "Unk3300IMEGFNOLDCE"];*/ 2:
                    message.unk3300IMEGFNOLDCE = reader.uint32();
                    break;
                case /* uint32 Unk3300_PGJKEICFKLL = 5 [json_name = "Unk3300PGJKEICFKLL"];*/ 5:
                    message.unk3300PGJKEICFKLL = reader.uint32();
                    break;
                case /* uint32 Unk3300_MBPLICBFAGL = 7 [json_name = "Unk3300MBPLICBFAGL"];*/ 7:
                    message.unk3300MBPLICBFAGL = reader.uint32();
                    break;
                case /* uint32 cultivate_id */ 12:
                    message.cultivateId = reader.uint32();
                    break;
                case /* uint32 time */ 15:
                    message.time = reader.uint32();
                    break;
                case /* uint32 Unk3300_AEGCNHLOPEP = 8 [json_name = "Unk3300AEGCNHLOPEP"];*/ 8:
                    message.unk3300AEGCNHLOPEP = reader.uint32();
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
        /* uint32 Unk3300_IOANLJBMBAI = 1 [json_name = "Unk3300IOANLJBMBAI"]; */
        if (message.unk3300IOANLJBMBAI !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.unk3300IOANLJBMBAI);
        /* uint32 Unk3300_DJEGJDACDEF = 6 [json_name = "Unk3300DJEGJDACDEF"]; */
        if (message.unk3300DJEGJDACDEF !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.unk3300DJEGJDACDEF);
        /* uint32 Unk3300_IMEGFNOLDCE = 2 [json_name = "Unk3300IMEGFNOLDCE"]; */
        if (message.unk3300IMEGFNOLDCE !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.unk3300IMEGFNOLDCE);
        /* uint32 Unk3300_PGJKEICFKLL = 5 [json_name = "Unk3300PGJKEICFKLL"]; */
        if (message.unk3300PGJKEICFKLL !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.unk3300PGJKEICFKLL);
        /* uint32 Unk3300_MBPLICBFAGL = 7 [json_name = "Unk3300MBPLICBFAGL"]; */
        if (message.unk3300MBPLICBFAGL !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.unk3300MBPLICBFAGL);
        /* uint32 cultivate_id = 12; */
        if (message.cultivateId !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.cultivateId);
        /* uint32 time = 15; */
        if (message.time !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.time);
        /* uint32 Unk3300_AEGCNHLOPEP = 8 [json_name = "Unk3300AEGCNHLOPEP"]; */
        if (message.unk3300AEGCNHLOPEP !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.unk3300AEGCNHLOPEP);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FungusCultivateReq
 */
exports.FungusCultivateReq = new FungusCultivateReq$Type();
