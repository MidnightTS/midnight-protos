"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TakeReunionMissionRewardRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ReunionMissionInfo_1 = require("./ReunionMissionInfo");
// @generated message type with reflection information, may provide speed optimized methods
class TakeReunionMissionRewardRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("TakeReunionMissionRewardRsp", [
            { no: 13, name: "reward_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "mission_info", kind: "message", T: () => ReunionMissionInfo_1.ReunionMissionInfo },
            { no: 6, name: "reward_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { rewardId: 0, rewardIndex: 0, retcode: 0 };
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
                case /* uint32 reward_id */ 13:
                    message.rewardId = reader.uint32();
                    break;
                case /* ReunionMissionInfo mission_info */ 2:
                    message.missionInfo = ReunionMissionInfo_1.ReunionMissionInfo.internalBinaryRead(reader, reader.uint32(), options, message.missionInfo);
                    break;
                case /* uint32 reward_index */ 6:
                    message.rewardIndex = reader.uint32();
                    break;
                case /* int32 retcode */ 3:
                    message.retcode = reader.int32();
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
        /* uint32 reward_id = 13; */
        if (message.rewardId !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.rewardId);
        /* ReunionMissionInfo mission_info = 2; */
        if (message.missionInfo)
            ReunionMissionInfo_1.ReunionMissionInfo.internalBinaryWrite(message.missionInfo, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 reward_index = 6; */
        if (message.rewardIndex !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.rewardIndex);
        /* int32 retcode = 3; */
        if (message.retcode !== 0)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message TakeReunionMissionRewardRsp
 */
exports.TakeReunionMissionRewardRsp = new TakeReunionMissionRewardRsp$Type();
