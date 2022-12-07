"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParentQuest = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ChildQuest_1 = require("./ChildQuest");
const ParentQuestRandomInfo_1 = require("./ParentQuestRandomInfo");
const InferencePageInfo_1 = require("./InferencePageInfo");
// @generated message type with reflection information, may provide speed optimized methods
class ParentQuest$Type extends runtime_5.MessageType {
    constructor() {
        super("ParentQuest", [
            { no: 5, name: "inference_page_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => InferencePageInfo_1.InferencePageInfo },
            { no: 7, name: "quest_var", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 5 /*ScalarType.INT32*/ },
            { no: 11, name: "video_key", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 15, name: "Unk3300_BOMOHKDHMNH", kind: "scalar", jsonName: "Unk3300BOMOHKDHMNH", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "random_info", kind: "message", T: () => ParentQuestRandomInfo_1.ParentQuestRandomInfo },
            { no: 3, name: "parent_quest_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "is_random", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "child_quest_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ChildQuest_1.ChildQuest },
            { no: 1, name: "is_finished", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "time_var_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 14, name: "Unk3300_PCIHJLPPHNJ", kind: "scalar", jsonName: "Unk3300PCIHJLPPHNJ", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { inferencePageList: [], questVar: [], videoKey: 0n, unk3300BOMOHKDHMNH: 0, parentQuestId: 0, isRandom: false, childQuestList: [], isFinished: false, timeVarMap: {}, unk3300PCIHJLPPHNJ: 0 };
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
                case /* repeated InferencePageInfo inference_page_list */ 5:
                    message.inferencePageList.push(InferencePageInfo_1.InferencePageInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated int32 quest_var */ 7:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.questVar.push(reader.int32());
                    else
                        message.questVar.push(reader.int32());
                    break;
                case /* uint64 video_key */ 11:
                    message.videoKey = reader.uint64().toBigInt();
                    break;
                case /* uint32 Unk3300_BOMOHKDHMNH = 15 [json_name = "Unk3300BOMOHKDHMNH"];*/ 15:
                    message.unk3300BOMOHKDHMNH = reader.uint32();
                    break;
                case /* ParentQuestRandomInfo random_info */ 9:
                    message.randomInfo = ParentQuestRandomInfo_1.ParentQuestRandomInfo.internalBinaryRead(reader, reader.uint32(), options, message.randomInfo);
                    break;
                case /* uint32 parent_quest_id */ 3:
                    message.parentQuestId = reader.uint32();
                    break;
                case /* bool is_random */ 12:
                    message.isRandom = reader.bool();
                    break;
                case /* repeated ChildQuest child_quest_list */ 8:
                    message.childQuestList.push(ChildQuest_1.ChildQuest.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* bool is_finished */ 1:
                    message.isFinished = reader.bool();
                    break;
                case /* map<uint32, uint32> time_var_map */ 2:
                    this.binaryReadMap2(message.timeVarMap, reader, options);
                    break;
                case /* uint32 Unk3300_PCIHJLPPHNJ = 14 [json_name = "Unk3300PCIHJLPPHNJ"];*/ 14:
                    message.unk3300PCIHJLPPHNJ = reader.uint32();
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
    binaryReadMap2(map, reader, options) {
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
                default: throw new globalThis.Error("unknown map entry field for field ParentQuest.time_var_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated InferencePageInfo inference_page_list = 5; */
        for (let i = 0; i < message.inferencePageList.length; i++)
            InferencePageInfo_1.InferencePageInfo.internalBinaryWrite(message.inferencePageList[i], writer.tag(5, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated int32 quest_var = 7; */
        if (message.questVar.length) {
            writer.tag(7, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.questVar.length; i++)
                writer.int32(message.questVar[i]);
            writer.join();
        }
        /* uint64 video_key = 11; */
        if (message.videoKey !== 0n)
            writer.tag(11, runtime_2.WireType.Varint).uint64(message.videoKey);
        /* uint32 Unk3300_BOMOHKDHMNH = 15 [json_name = "Unk3300BOMOHKDHMNH"]; */
        if (message.unk3300BOMOHKDHMNH !== 0)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.unk3300BOMOHKDHMNH);
        /* ParentQuestRandomInfo random_info = 9; */
        if (message.randomInfo)
            ParentQuestRandomInfo_1.ParentQuestRandomInfo.internalBinaryWrite(message.randomInfo, writer.tag(9, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* uint32 parent_quest_id = 3; */
        if (message.parentQuestId !== 0)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.parentQuestId);
        /* bool is_random = 12; */
        if (message.isRandom !== false)
            writer.tag(12, runtime_2.WireType.Varint).bool(message.isRandom);
        /* repeated ChildQuest child_quest_list = 8; */
        for (let i = 0; i < message.childQuestList.length; i++)
            ChildQuest_1.ChildQuest.internalBinaryWrite(message.childQuestList[i], writer.tag(8, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* bool is_finished = 1; */
        if (message.isFinished !== false)
            writer.tag(1, runtime_2.WireType.Varint).bool(message.isFinished);
        /* map<uint32, uint32> time_var_map = 2; */
        for (let k of Object.keys(message.timeVarMap))
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Varint).uint32(message.timeVarMap[k]).join();
        /* uint32 Unk3300_PCIHJLPPHNJ = 14 [json_name = "Unk3300PCIHJLPPHNJ"]; */
        if (message.unk3300PCIHJLPPHNJ !== 0)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.unk3300PCIHJLPPHNJ);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ParentQuest
 */
exports.ParentQuest = new ParentQuest$Type();
