"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalvageChallengeInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const SalvageScoreChallengeInfo_1 = require("./SalvageScoreChallengeInfo");
const SalvageBundleChallengeInfo_1 = require("./SalvageBundleChallengeInfo");
// @generated message type with reflection information, may provide speed optimized methods
class SalvageChallengeInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("SalvageChallengeInfo", [
            { no: 11, name: "challenge_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "is_unlock", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "bundle_info", kind: "message", oneof: "challengeDetail", T: () => SalvageBundleChallengeInfo_1.SalvageBundleChallengeInfo },
            { no: 9, name: "score_challenge_info", kind: "message", oneof: "challengeDetail", T: () => SalvageScoreChallengeInfo_1.SalvageScoreChallengeInfo },
            { no: 12, name: "boss_challenge_id", kind: "scalar", oneof: "challengeDetail", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { challengeType: 0, isUnlock: false, challengeDetail: { oneofKind: undefined } };
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
                case /* uint32 challenge_type */ 11:
                    message.challengeType = reader.uint32();
                    break;
                case /* bool is_unlock */ 14:
                    message.isUnlock = reader.bool();
                    break;
                case /* SalvageBundleChallengeInfo bundle_info */ 2:
                    message.challengeDetail = {
                        oneofKind: "bundleInfo",
                        bundleInfo: SalvageBundleChallengeInfo_1.SalvageBundleChallengeInfo.internalBinaryRead(reader, reader.uint32(), options, message.challengeDetail.bundleInfo)
                    };
                    break;
                case /* SalvageScoreChallengeInfo score_challenge_info */ 9:
                    message.challengeDetail = {
                        oneofKind: "scoreChallengeInfo",
                        scoreChallengeInfo: SalvageScoreChallengeInfo_1.SalvageScoreChallengeInfo.internalBinaryRead(reader, reader.uint32(), options, message.challengeDetail.scoreChallengeInfo)
                    };
                    break;
                case /* uint32 boss_challenge_id */ 12:
                    message.challengeDetail = {
                        oneofKind: "bossChallengeId",
                        bossChallengeId: reader.uint32()
                    };
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
        /* uint32 challenge_type = 11; */
        if (message.challengeType !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.challengeType);
        /* bool is_unlock = 14; */
        if (message.isUnlock !== false)
            writer.tag(14, runtime_1.WireType.Varint).bool(message.isUnlock);
        /* SalvageBundleChallengeInfo bundle_info = 2; */
        if (message.challengeDetail.oneofKind === "bundleInfo")
            SalvageBundleChallengeInfo_1.SalvageBundleChallengeInfo.internalBinaryWrite(message.challengeDetail.bundleInfo, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* SalvageScoreChallengeInfo score_challenge_info = 9; */
        if (message.challengeDetail.oneofKind === "scoreChallengeInfo")
            SalvageScoreChallengeInfo_1.SalvageScoreChallengeInfo.internalBinaryWrite(message.challengeDetail.scoreChallengeInfo, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 boss_challenge_id = 12; */
        if (message.challengeDetail.oneofKind === "bossChallengeId")
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.challengeDetail.bossChallengeId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SalvageChallengeInfo
 */
exports.SalvageChallengeInfo = new SalvageChallengeInfo$Type();
