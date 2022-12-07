"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelerSlabChallengeStage = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ChannelerSlabChallenge_1 = require("./ChannelerSlabChallenge");
const ChannelerSlabOneoffDungeon_1 = require("./ChannelerSlabOneoffDungeon");
// @generated message type with reflection information, may provide speed optimized methods
class ChannelerSlabChallengeStage$Type extends runtime_5.MessageType {
    constructor() {
        super("ChannelerSlabChallengeStage", [
            { no: 4, name: "is_open", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "dungeon_info", kind: "message", T: () => ChannelerSlabOneoffDungeon_1.ChannelerSlabOneoffDungeon },
            { no: 13, name: "open_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "stage_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "challenge_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ChannelerSlabChallenge_1.ChannelerSlabChallenge }
        ]);
    }
    create(value) {
        const message = { isOpen: false, openTime: 0, stageId: 0, challengeList: [] };
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
                case /* bool is_open */ 4:
                    message.isOpen = reader.bool();
                    break;
                case /* ChannelerSlabOneoffDungeon dungeon_info */ 12:
                    message.dungeonInfo = ChannelerSlabOneoffDungeon_1.ChannelerSlabOneoffDungeon.internalBinaryRead(reader, reader.uint32(), options, message.dungeonInfo);
                    break;
                case /* uint32 open_time */ 13:
                    message.openTime = reader.uint32();
                    break;
                case /* uint32 stage_id */ 1:
                    message.stageId = reader.uint32();
                    break;
                case /* repeated ChannelerSlabChallenge challenge_list */ 2:
                    message.challengeList.push(ChannelerSlabChallenge_1.ChannelerSlabChallenge.internalBinaryRead(reader, reader.uint32(), options));
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
        /* bool is_open = 4; */
        if (message.isOpen !== false)
            writer.tag(4, runtime_1.WireType.Varint).bool(message.isOpen);
        /* ChannelerSlabOneoffDungeon dungeon_info = 12; */
        if (message.dungeonInfo)
            ChannelerSlabOneoffDungeon_1.ChannelerSlabOneoffDungeon.internalBinaryWrite(message.dungeonInfo, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 open_time = 13; */
        if (message.openTime !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.openTime);
        /* uint32 stage_id = 1; */
        if (message.stageId !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.stageId);
        /* repeated ChannelerSlabChallenge challenge_list = 2; */
        for (let i = 0; i < message.challengeList.length; i++)
            ChannelerSlabChallenge_1.ChannelerSlabChallenge.internalBinaryWrite(message.challengeList[i], writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ChannelerSlabChallengeStage
 */
exports.ChannelerSlabChallengeStage = new ChannelerSlabChallengeStage$Type();
