"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MistTrialGetChallengeMissionRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const MistTrialMissionInfo_1 = require("./MistTrialMissionInfo");
// @generated message type with reflection information, may provide speed optimized methods
class MistTrialGetChallengeMissionRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("MistTrialGetChallengeMissionRsp", [
            { no: 6, name: "trial_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "mission_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => MistTrialMissionInfo_1.MistTrialMissionInfo },
            { no: 7, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { trialId: 0, missionInfoList: [], retcode: 0 };
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
                case /* uint32 trial_id */ 6:
                    message.trialId = reader.uint32();
                    break;
                case /* repeated MistTrialMissionInfo mission_info_list */ 3:
                    message.missionInfoList.push(MistTrialMissionInfo_1.MistTrialMissionInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* int32 retcode */ 7:
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
        /* uint32 trial_id = 6; */
        if (message.trialId !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.trialId);
        /* repeated MistTrialMissionInfo mission_info_list = 3; */
        for (let i = 0; i < message.missionInfoList.length; i++)
            MistTrialMissionInfo_1.MistTrialMissionInfo.internalBinaryWrite(message.missionInfoList[i], writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* int32 retcode = 7; */
        if (message.retcode !== 0)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MistTrialGetChallengeMissionRsp
 */
exports.MistTrialGetChallengeMissionRsp = new MistTrialGetChallengeMissionRsp$Type();
