"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpeditionPathInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ExpeditionState_1 = require("./ExpeditionState");
// @generated message type with reflection information, may provide speed optimized methods
class ExpeditionPathInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("ExpeditionPathInfo", [
            { no: 10, name: "start_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "bonus_probability", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 8, name: "avatar_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "path_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "Unk3300_AIEJKADFLKG", kind: "scalar", jsonName: "Unk3300AIEJKADFLKG", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "Unk3300_LKAHOEBNBBI", kind: "scalar", jsonName: "Unk3300LKAHOEBNBBI", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "Unk3300_AFGPGIIGAKA", kind: "scalar", jsonName: "Unk3300AFGPGIIGAKA", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "Unk3300_LFIFDGAGFDC", kind: "scalar", jsonName: "Unk3300LFIFDGAGFDC", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "state", kind: "enum", T: () => ["ExpeditionState", ExpeditionState_1.ExpeditionState, "EXPEDITION_STATE_"] },
            { no: 9, name: "challenge_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { startTime: 0, bonusProbability: 0, avatarIdList: [], pathId: 0, unk3300AIEJKADFLKG: 0, unk3300LKAHOEBNBBI: 0, unk3300AFGPGIIGAKA: 0, unk3300LFIFDGAGFDC: 0, state: 0, challengeId: 0 };
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
                case /* uint32 start_time */ 10:
                    message.startTime = reader.uint32();
                    break;
                case /* float bonus_probability */ 12:
                    message.bonusProbability = reader.float();
                    break;
                case /* repeated uint32 avatar_id_list */ 8:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.avatarIdList.push(reader.uint32());
                    else
                        message.avatarIdList.push(reader.uint32());
                    break;
                case /* uint32 path_id */ 11:
                    message.pathId = reader.uint32();
                    break;
                case /* uint32 Unk3300_AIEJKADFLKG = 6 [json_name = "Unk3300AIEJKADFLKG"];*/ 6:
                    message.unk3300AIEJKADFLKG = reader.uint32();
                    break;
                case /* uint32 Unk3300_LKAHOEBNBBI = 14 [json_name = "Unk3300LKAHOEBNBBI"];*/ 14:
                    message.unk3300LKAHOEBNBBI = reader.uint32();
                    break;
                case /* uint32 Unk3300_AFGPGIIGAKA = 7 [json_name = "Unk3300AFGPGIIGAKA"];*/ 7:
                    message.unk3300AFGPGIIGAKA = reader.uint32();
                    break;
                case /* uint32 Unk3300_LFIFDGAGFDC = 5 [json_name = "Unk3300LFIFDGAGFDC"];*/ 5:
                    message.unk3300LFIFDGAGFDC = reader.uint32();
                    break;
                case /* ExpeditionState state */ 13:
                    message.state = reader.int32();
                    break;
                case /* uint32 challenge_id */ 9:
                    message.challengeId = reader.uint32();
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
        /* uint32 start_time = 10; */
        if (message.startTime !== 0)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.startTime);
        /* float bonus_probability = 12; */
        if (message.bonusProbability !== 0)
            writer.tag(12, runtime_2.WireType.Bit32).float(message.bonusProbability);
        /* repeated uint32 avatar_id_list = 8; */
        if (message.avatarIdList.length) {
            writer.tag(8, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.avatarIdList.length; i++)
                writer.uint32(message.avatarIdList[i]);
            writer.join();
        }
        /* uint32 path_id = 11; */
        if (message.pathId !== 0)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.pathId);
        /* uint32 Unk3300_AIEJKADFLKG = 6 [json_name = "Unk3300AIEJKADFLKG"]; */
        if (message.unk3300AIEJKADFLKG !== 0)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.unk3300AIEJKADFLKG);
        /* uint32 Unk3300_LKAHOEBNBBI = 14 [json_name = "Unk3300LKAHOEBNBBI"]; */
        if (message.unk3300LKAHOEBNBBI !== 0)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.unk3300LKAHOEBNBBI);
        /* uint32 Unk3300_AFGPGIIGAKA = 7 [json_name = "Unk3300AFGPGIIGAKA"]; */
        if (message.unk3300AFGPGIIGAKA !== 0)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.unk3300AFGPGIIGAKA);
        /* uint32 Unk3300_LFIFDGAGFDC = 5 [json_name = "Unk3300LFIFDGAGFDC"]; */
        if (message.unk3300LFIFDGAGFDC !== 0)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.unk3300LFIFDGAGFDC);
        /* ExpeditionState state = 13; */
        if (message.state !== 0)
            writer.tag(13, runtime_2.WireType.Varint).int32(message.state);
        /* uint32 challenge_id = 9; */
        if (message.challengeId !== 0)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.challengeId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ExpeditionPathInfo
 */
exports.ExpeditionPathInfo = new ExpeditionPathInfo$Type();
