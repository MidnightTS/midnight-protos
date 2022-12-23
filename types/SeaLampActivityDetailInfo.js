"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeaLampActivityDetailInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class SeaLampActivityDetailInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("SeaLampActivityDetailInfo", [
            { no: 2, name: "Unk3300_ODBFFAIIPMB", kind: "scalar", jsonName: "Unk3300ODBFFAIIPMB", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "days", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "factor", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "progress", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "Unk3300_FGHDJJCLNFN", kind: "scalar", jsonName: "Unk3300FGHDJJCLNFN", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "contribution", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "phase_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300ODBFFAIIPMB: [], days: 0, factor: 0, progress: 0, unk3300FGHDJJCLNFN: [], contribution: 0, phaseId: 0 };
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
                case /* repeated uint32 Unk3300_ODBFFAIIPMB = 2 [json_name = "Unk3300ODBFFAIIPMB"];*/ 2:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300ODBFFAIIPMB.push(reader.uint32());
                    else
                        message.unk3300ODBFFAIIPMB.push(reader.uint32());
                    break;
                case /* uint32 days */ 6:
                    message.days = reader.uint32();
                    break;
                case /* uint32 factor */ 8:
                    message.factor = reader.uint32();
                    break;
                case /* uint32 progress */ 5:
                    message.progress = reader.uint32();
                    break;
                case /* repeated uint32 Unk3300_FGHDJJCLNFN = 14 [json_name = "Unk3300FGHDJJCLNFN"];*/ 14:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300FGHDJJCLNFN.push(reader.uint32());
                    else
                        message.unk3300FGHDJJCLNFN.push(reader.uint32());
                    break;
                case /* uint32 contribution */ 11:
                    message.contribution = reader.uint32();
                    break;
                case /* uint32 phase_id */ 3:
                    message.phaseId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 Unk3300_ODBFFAIIPMB = 2 [json_name = "Unk3300ODBFFAIIPMB"]; */
        if (message.unk3300ODBFFAIIPMB.length) {
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300ODBFFAIIPMB.length; i++)
                writer.uint32(message.unk3300ODBFFAIIPMB[i]);
            writer.join();
        }
        /* uint32 days = 6; */
        if (message.days !== 0)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.days);
        /* uint32 factor = 8; */
        if (message.factor !== 0)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.factor);
        /* uint32 progress = 5; */
        if (message.progress !== 0)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.progress);
        /* repeated uint32 Unk3300_FGHDJJCLNFN = 14 [json_name = "Unk3300FGHDJJCLNFN"]; */
        if (message.unk3300FGHDJJCLNFN.length) {
            writer.tag(14, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300FGHDJJCLNFN.length; i++)
                writer.uint32(message.unk3300FGHDJJCLNFN[i]);
            writer.join();
        }
        /* uint32 contribution = 11; */
        if (message.contribution !== 0)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.contribution);
        /* uint32 phase_id = 3; */
        if (message.phaseId !== 0)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.phaseId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SeaLampActivityDetailInfo
 */
exports.SeaLampActivityDetailInfo = new SeaLampActivityDetailInfo$Type();
