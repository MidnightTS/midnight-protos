"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RogueDiaryProgress = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class RogueDiaryProgress$Type extends runtime_5.MessageType {
    constructor() {
        super("RogueDiaryProgress", [
            { no: 10, name: "difficulty", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "is_enter_dungeon", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "stage_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "optional_card_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "cur_round", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { difficulty: 0, isEnterDungeon: false, stageId: 0, optionalCardList: [], curRound: 0 };
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
                case /* uint32 difficulty */ 10:
                    message.difficulty = reader.uint32();
                    break;
                case /* bool is_enter_dungeon */ 3:
                    message.isEnterDungeon = reader.bool();
                    break;
                case /* uint32 stage_id */ 6:
                    message.stageId = reader.uint32();
                    break;
                case /* repeated uint32 optional_card_list */ 5:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.optionalCardList.push(reader.uint32());
                    else
                        message.optionalCardList.push(reader.uint32());
                    break;
                case /* uint32 cur_round */ 4:
                    message.curRound = reader.uint32();
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
        /* uint32 difficulty = 10; */
        if (message.difficulty !== 0)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.difficulty);
        /* bool is_enter_dungeon = 3; */
        if (message.isEnterDungeon !== false)
            writer.tag(3, runtime_2.WireType.Varint).bool(message.isEnterDungeon);
        /* uint32 stage_id = 6; */
        if (message.stageId !== 0)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.stageId);
        /* repeated uint32 optional_card_list = 5; */
        if (message.optionalCardList.length) {
            writer.tag(5, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.optionalCardList.length; i++)
                writer.uint32(message.optionalCardList[i]);
            writer.join();
        }
        /* uint32 cur_round = 4; */
        if (message.curRound !== 0)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.curRound);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message RogueDiaryProgress
 */
exports.RogueDiaryProgress = new RogueDiaryProgress$Type();
