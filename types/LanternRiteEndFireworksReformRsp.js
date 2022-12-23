"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanternRiteEndFireworksReformRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class LanternRiteEndFireworksReformRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("LanternRiteEndFireworksReformRsp", [
            { no: 11, name: "Unk3300_CGJNBGAKFAD", kind: "scalar", jsonName: "Unk3300CGJNBGAKFAD", T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "Unk3300_FPEFIADFBNI", kind: "scalar", jsonName: "Unk3300FPEFIADFBNI", T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 13, name: "stage_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "final_score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "Unk3300_ALMNEGCIILA", kind: "scalar", jsonName: "Unk3300ALMNEGCIILA", T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "is_new_record", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "challenge_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "is_full_score", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { unk3300CGJNBGAKFAD: false, unk3300FPEFIADFBNI: false, retcode: 0, stageId: 0, finalScore: 0, unk3300ALMNEGCIILA: false, isNewRecord: false, challengeId: 0, isFullScore: false };
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
                case /* bool Unk3300_CGJNBGAKFAD = 11 [json_name = "Unk3300CGJNBGAKFAD"];*/ 11:
                    message.unk3300CGJNBGAKFAD = reader.bool();
                    break;
                case /* bool Unk3300_FPEFIADFBNI = 1 [json_name = "Unk3300FPEFIADFBNI"];*/ 1:
                    message.unk3300FPEFIADFBNI = reader.bool();
                    break;
                case /* int32 retcode */ 9:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 stage_id */ 13:
                    message.stageId = reader.uint32();
                    break;
                case /* uint32 final_score */ 15:
                    message.finalScore = reader.uint32();
                    break;
                case /* bool Unk3300_ALMNEGCIILA = 6 [json_name = "Unk3300ALMNEGCIILA"];*/ 6:
                    message.unk3300ALMNEGCIILA = reader.bool();
                    break;
                case /* bool is_new_record */ 10:
                    message.isNewRecord = reader.bool();
                    break;
                case /* uint32 challenge_id */ 4:
                    message.challengeId = reader.uint32();
                    break;
                case /* bool is_full_score */ 7:
                    message.isFullScore = reader.bool();
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
        /* bool Unk3300_CGJNBGAKFAD = 11 [json_name = "Unk3300CGJNBGAKFAD"]; */
        if (message.unk3300CGJNBGAKFAD !== false)
            writer.tag(11, runtime_1.WireType.Varint).bool(message.unk3300CGJNBGAKFAD);
        /* bool Unk3300_FPEFIADFBNI = 1 [json_name = "Unk3300FPEFIADFBNI"]; */
        if (message.unk3300FPEFIADFBNI !== false)
            writer.tag(1, runtime_1.WireType.Varint).bool(message.unk3300FPEFIADFBNI);
        /* int32 retcode = 9; */
        if (message.retcode !== 0)
            writer.tag(9, runtime_1.WireType.Varint).int32(message.retcode);
        /* uint32 stage_id = 13; */
        if (message.stageId !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.stageId);
        /* uint32 final_score = 15; */
        if (message.finalScore !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.finalScore);
        /* bool Unk3300_ALMNEGCIILA = 6 [json_name = "Unk3300ALMNEGCIILA"]; */
        if (message.unk3300ALMNEGCIILA !== false)
            writer.tag(6, runtime_1.WireType.Varint).bool(message.unk3300ALMNEGCIILA);
        /* bool is_new_record = 10; */
        if (message.isNewRecord !== false)
            writer.tag(10, runtime_1.WireType.Varint).bool(message.isNewRecord);
        /* uint32 challenge_id = 4; */
        if (message.challengeId !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.challengeId);
        /* bool is_full_score = 7; */
        if (message.isFullScore !== false)
            writer.tag(7, runtime_1.WireType.Varint).bool(message.isFullScore);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message LanternRiteEndFireworksReformRsp
 */
exports.LanternRiteEndFireworksReformRsp = new LanternRiteEndFireworksReformRsp$Type();
