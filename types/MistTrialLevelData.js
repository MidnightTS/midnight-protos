"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MistTrialLevelData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const MistTrialBestAvatar_1 = require("./MistTrialBestAvatar");
// @generated message type with reflection information, may provide speed optimized methods
class MistTrialLevelData$Type extends runtime_5.MessageType {
    constructor() {
        super("MistTrialLevelData", [
            { no: 10, name: "open_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "best_avatar_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => MistTrialBestAvatar_1.MistTrialBestAvatar },
            { no: 14, name: "level_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "first_pass_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "best_hit_avatar", kind: "message", T: () => MistTrialBestAvatar_1.MistTrialBestAvatar },
            { no: 9, name: "is_open", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { openTime: 0, bestAvatarList: [], levelId: 0, firstPassTime: 0, isOpen: false };
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
                case /* uint32 open_time */ 10:
                    message.openTime = reader.uint32();
                    break;
                case /* repeated MistTrialBestAvatar best_avatar_list */ 3:
                    message.bestAvatarList.push(MistTrialBestAvatar_1.MistTrialBestAvatar.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 level_id */ 14:
                    message.levelId = reader.uint32();
                    break;
                case /* uint32 first_pass_time */ 1:
                    message.firstPassTime = reader.uint32();
                    break;
                case /* MistTrialBestAvatar best_hit_avatar */ 11:
                    message.bestHitAvatar = MistTrialBestAvatar_1.MistTrialBestAvatar.internalBinaryRead(reader, reader.uint32(), options, message.bestHitAvatar);
                    break;
                case /* bool is_open */ 9:
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
        /* uint32 open_time = 10; */
        if (message.openTime !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.openTime);
        /* repeated MistTrialBestAvatar best_avatar_list = 3; */
        for (let i = 0; i < message.bestAvatarList.length; i++)
            MistTrialBestAvatar_1.MistTrialBestAvatar.internalBinaryWrite(message.bestAvatarList[i], writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 level_id = 14; */
        if (message.levelId !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.levelId);
        /* uint32 first_pass_time = 1; */
        if (message.firstPassTime !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.firstPassTime);
        /* MistTrialBestAvatar best_hit_avatar = 11; */
        if (message.bestHitAvatar)
            MistTrialBestAvatar_1.MistTrialBestAvatar.internalBinaryWrite(message.bestHitAvatar, writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool is_open = 9; */
        if (message.isOpen !== false)
            writer.tag(9, runtime_1.WireType.Varint).bool(message.isOpen);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MistTrialLevelData
 */
exports.MistTrialLevelData = new MistTrialLevelData$Type();
