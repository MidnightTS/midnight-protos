"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalvageStageInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const SalvageChallengeInfo_1 = require("./SalvageChallengeInfo");
// @generated message type with reflection information, may provide speed optimized methods
class SalvageStageInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("SalvageStageInfo", [
            { no: 13, name: "stage_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "challenge_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => SalvageChallengeInfo_1.SalvageChallengeInfo },
            { no: 7, name: "is_open", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { stageId: 0, challengeInfoList: [], isOpen: false };
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
                case /* uint32 stage_id */ 13:
                    message.stageId = reader.uint32();
                    break;
                case /* repeated SalvageChallengeInfo challenge_info_list */ 3:
                    message.challengeInfoList.push(SalvageChallengeInfo_1.SalvageChallengeInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* bool is_open */ 7:
                    message.isOpen = reader.bool();
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
        /* uint32 stage_id = 13; */
        if (message.stageId !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.stageId);
        /* repeated SalvageChallengeInfo challenge_info_list = 3; */
        for (let i = 0; i < message.challengeInfoList.length; i++)
            SalvageChallengeInfo_1.SalvageChallengeInfo.internalBinaryWrite(message.challengeInfoList[i], writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool is_open = 7; */
        if (message.isOpen !== false)
            writer.tag(7, runtime_1.WireType.Varint).bool(message.isOpen);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SalvageStageInfo
 */
exports.SalvageStageInfo = new SalvageStageInfo$Type();
