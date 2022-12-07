"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpeditionActivityDetailInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ExpeditionPathInfo_1 = require("./ExpeditionPathInfo");
const ExpeditionChallengeInfo_1 = require("./ExpeditionChallengeInfo");
// @generated message type with reflection information, may provide speed optimized methods
class ExpeditionActivityDetailInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("ExpeditionActivityDetailInfo", [
            { no: 9, name: "Unk3300_GJLCAJOFCKL", kind: "scalar", jsonName: "Unk3300GJLCAJOFCKL", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "challenge_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ExpeditionChallengeInfo_1.ExpeditionChallengeInfo },
            { no: 3, name: "Unk3300_MNPBCNEDKAJ", kind: "scalar", jsonName: "Unk3300MNPBCNEDKAJ", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "path_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ExpeditionPathInfo_1.ExpeditionPathInfo },
            { no: 4, name: "is_content_closed", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "content_close_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300GJLCAJOFCKL: 0, challengeInfoList: [], unk3300MNPBCNEDKAJ: 0, pathInfoList: [], isContentClosed: false, contentCloseTime: 0 };
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
                case /* uint32 Unk3300_GJLCAJOFCKL = 9 [json_name = "Unk3300GJLCAJOFCKL"];*/ 9:
                    message.unk3300GJLCAJOFCKL = reader.uint32();
                    break;
                case /* repeated ExpeditionChallengeInfo challenge_info_list */ 15:
                    message.challengeInfoList.push(ExpeditionChallengeInfo_1.ExpeditionChallengeInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 Unk3300_MNPBCNEDKAJ = 3 [json_name = "Unk3300MNPBCNEDKAJ"];*/ 3:
                    message.unk3300MNPBCNEDKAJ = reader.uint32();
                    break;
                case /* repeated ExpeditionPathInfo path_info_list */ 11:
                    message.pathInfoList.push(ExpeditionPathInfo_1.ExpeditionPathInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* bool is_content_closed */ 4:
                    message.isContentClosed = reader.bool();
                    break;
                case /* uint32 content_close_time */ 6:
                    message.contentCloseTime = reader.uint32();
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
        /* uint32 Unk3300_GJLCAJOFCKL = 9 [json_name = "Unk3300GJLCAJOFCKL"]; */
        if (message.unk3300GJLCAJOFCKL !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.unk3300GJLCAJOFCKL);
        /* repeated ExpeditionChallengeInfo challenge_info_list = 15; */
        for (let i = 0; i < message.challengeInfoList.length; i++)
            ExpeditionChallengeInfo_1.ExpeditionChallengeInfo.internalBinaryWrite(message.challengeInfoList[i], writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 Unk3300_MNPBCNEDKAJ = 3 [json_name = "Unk3300MNPBCNEDKAJ"]; */
        if (message.unk3300MNPBCNEDKAJ !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.unk3300MNPBCNEDKAJ);
        /* repeated ExpeditionPathInfo path_info_list = 11; */
        for (let i = 0; i < message.pathInfoList.length; i++)
            ExpeditionPathInfo_1.ExpeditionPathInfo.internalBinaryWrite(message.pathInfoList[i], writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool is_content_closed = 4; */
        if (message.isContentClosed !== false)
            writer.tag(4, runtime_1.WireType.Varint).bool(message.isContentClosed);
        /* uint32 content_close_time = 6; */
        if (message.contentCloseTime !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.contentCloseTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ExpeditionActivityDetailInfo
 */
exports.ExpeditionActivityDetailInfo = new ExpeditionActivityDetailInfo$Type();
