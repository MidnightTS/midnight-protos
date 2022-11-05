"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGDuelExtra = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GCGChallengeData_1 = require("./GCGChallengeData");
// @generated message type with reflection information, may provide speed optimized methods
class GCGDuelExtra$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGDuelExtra", [
            { no: 1, name: "card_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "field_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "card_back_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "card_face_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 5, name: "challenge_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GCGChallengeData_1.GCGChallengeData },
            { no: 6, name: "score", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { cardIdList: [], cardFaceMap: {}, challengeList: [] };
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
                case /* optional uint32 field_id */ 2:
                    message.fieldId = reader.uint32();
                    break;
                case /* optional uint32 card_back_id */ 3:
                    message.cardBackId = reader.uint32();
                    break;
                case /* map<uint32, uint32> card_face_map */ 4:
                    this.binaryReadMap4(message.cardFaceMap, reader, options);
                    break;
                case /* repeated com.midnights.game.GCGChallengeData challenge_list */ 5:
                    message.challengeList.push(GCGChallengeData_1.GCGChallengeData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 score */ 6:
                    message.score = reader.uint32();
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
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.GCGDuelExtra.card_face_map");
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
        /* optional uint32 field_id = 2; */
        if (message.fieldId !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.fieldId);
        /* optional uint32 card_back_id = 3; */
        if (message.cardBackId !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.cardBackId);
        /* map<uint32, uint32> card_face_map = 4; */
        for (let k of Object.keys(message.cardFaceMap))
            writer.tag(4, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Varint).uint32(message.cardFaceMap[k]).join();
        /* repeated com.midnights.game.GCGChallengeData challenge_list = 5; */
        for (let i = 0; i < message.challengeList.length; i++)
            GCGChallengeData_1.GCGChallengeData.internalBinaryWrite(message.challengeList[i], writer.tag(5, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 score = 6; */
        if (message.score !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.score);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGDuelExtra
 */
exports.GCGDuelExtra = new GCGDuelExtra$Type();
