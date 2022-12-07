"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGDuelExtra = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const PlatformType_1 = require("./PlatformType");
const GCGChallengeData_1 = require("./GCGChallengeData");
// @generated message type with reflection information, may provide speed optimized methods
class GCGDuelExtra$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGDuelExtra", [
            { no: 1, name: "card_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "field_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "card_back_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "card_face_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 5, name: "challenge_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GCGChallengeData_1.GCGChallengeData },
            { no: 6, name: "score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "is_match_ai", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "ai_deck_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "is_internal", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "forbid_finish_challenge_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "client_version", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "platform_type", kind: "enum", T: () => ["PlatformType", PlatformType_1.PlatformType, "PLATFORM_TYPE_"] }
        ]);
    }
    create(value) {
        const message = { cardIdList: [], fieldId: 0, cardBackId: 0, cardFaceMap: {}, challengeList: [], score: 0, isMatchAi: false, aiDeckId: 0, isInternal: false, forbidFinishChallengeList: [], level: 0, clientVersion: 0, platformType: 0 };
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
                case /* repeated uint32 card_id_list */ 1:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.cardIdList.push(reader.uint32());
                    else
                        message.cardIdList.push(reader.uint32());
                    break;
                case /* uint32 field_id */ 2:
                    message.fieldId = reader.uint32();
                    break;
                case /* uint32 card_back_id */ 3:
                    message.cardBackId = reader.uint32();
                    break;
                case /* map<uint32, uint32> card_face_map */ 4:
                    this.binaryReadMap4(message.cardFaceMap, reader, options);
                    break;
                case /* repeated GCGChallengeData challenge_list */ 5:
                    message.challengeList.push(GCGChallengeData_1.GCGChallengeData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 score */ 6:
                    message.score = reader.uint32();
                    break;
                case /* bool is_match_ai */ 7:
                    message.isMatchAi = reader.bool();
                    break;
                case /* uint32 ai_deck_id */ 8:
                    message.aiDeckId = reader.uint32();
                    break;
                case /* bool is_internal */ 9:
                    message.isInternal = reader.bool();
                    break;
                case /* repeated uint32 forbid_finish_challenge_list */ 10:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.forbidFinishChallengeList.push(reader.uint32());
                    else
                        message.forbidFinishChallengeList.push(reader.uint32());
                    break;
                case /* uint32 level */ 11:
                    message.level = reader.uint32();
                    break;
                case /* uint32 client_version */ 12:
                    message.clientVersion = reader.uint32();
                    break;
                case /* PlatformType platform_type */ 13:
                    message.platformType = reader.int32();
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
    binaryReadMap4(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field GCGDuelExtra.card_face_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 card_id_list = 1; */
        if (message.cardIdList.length) {
            writer.tag(1, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.cardIdList.length; i++)
                writer.uint32(message.cardIdList[i]);
            writer.join();
        }
        /* uint32 field_id = 2; */
        if (message.fieldId !== 0)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.fieldId);
        /* uint32 card_back_id = 3; */
        if (message.cardBackId !== 0)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.cardBackId);
        /* map<uint32, uint32> card_face_map = 4; */
        for (let k of Object.keys(message.cardFaceMap))
            writer.tag(4, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Varint).uint32(message.cardFaceMap[k]).join();
        /* repeated GCGChallengeData challenge_list = 5; */
        for (let i = 0; i < message.challengeList.length; i++)
            GCGChallengeData_1.GCGChallengeData.internalBinaryWrite(message.challengeList[i], writer.tag(5, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* uint32 score = 6; */
        if (message.score !== 0)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.score);
        /* bool is_match_ai = 7; */
        if (message.isMatchAi !== false)
            writer.tag(7, runtime_2.WireType.Varint).bool(message.isMatchAi);
        /* uint32 ai_deck_id = 8; */
        if (message.aiDeckId !== 0)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.aiDeckId);
        /* bool is_internal = 9; */
        if (message.isInternal !== false)
            writer.tag(9, runtime_2.WireType.Varint).bool(message.isInternal);
        /* repeated uint32 forbid_finish_challenge_list = 10; */
        if (message.forbidFinishChallengeList.length) {
            writer.tag(10, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.forbidFinishChallengeList.length; i++)
                writer.uint32(message.forbidFinishChallengeList[i]);
            writer.join();
        }
        /* uint32 level = 11; */
        if (message.level !== 0)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.level);
        /* uint32 client_version = 12; */
        if (message.clientVersion !== 0)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.clientVersion);
        /* PlatformType platform_type = 13; */
        if (message.platformType !== 0)
            writer.tag(13, runtime_2.WireType.Varint).int32(message.platformType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGDuelExtra
 */
exports.GCGDuelExtra = new GCGDuelExtra$Type();
