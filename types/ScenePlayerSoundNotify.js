"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScenePlayerSoundNotify = exports.ScenePlayerSoundNotify_PlaySoundType = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
/**
 * @generated from protobuf enum ScenePlayerSoundNotify.PlaySoundType
 */
var ScenePlayerSoundNotify_PlaySoundType;
(function (ScenePlayerSoundNotify_PlaySoundType) {
    /**
     * @generated from protobuf enum value: PLAY_SOUND_TYPE_NONE = 0;
     */
    ScenePlayerSoundNotify_PlaySoundType[ScenePlayerSoundNotify_PlaySoundType["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: PLAY_SOUND_TYPE_START = 1;
     */
    ScenePlayerSoundNotify_PlaySoundType[ScenePlayerSoundNotify_PlaySoundType["START"] = 1] = "START";
    /**
     * @generated from protobuf enum value: PLAY_SOUND_TYPE_STOP = 2;
     */
    ScenePlayerSoundNotify_PlaySoundType[ScenePlayerSoundNotify_PlaySoundType["STOP"] = 2] = "STOP";
})(ScenePlayerSoundNotify_PlaySoundType = exports.ScenePlayerSoundNotify_PlaySoundType || (exports.ScenePlayerSoundNotify_PlaySoundType = {}));
// @generated message type with reflection information, may provide speed optimized methods
class ScenePlayerSoundNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("ScenePlayerSoundNotify", [
            { no: 6, name: "play_pos", kind: "message", T: () => Vector_1.Vector },
            { no: 15, name: "play_type", kind: "enum", T: () => ["ScenePlayerSoundNotify.PlaySoundType", ScenePlayerSoundNotify_PlaySoundType, "PLAY_SOUND_TYPE_"] },
            { no: 14, name: "sound_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { playType: 0, soundName: "" };
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
                case /* Vector play_pos */ 6:
                    message.playPos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.playPos);
                    break;
                case /* ScenePlayerSoundNotify.PlaySoundType play_type */ 15:
                    message.playType = reader.int32();
                    break;
                case /* string sound_name */ 14:
                    message.soundName = reader.string();
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
        /* Vector play_pos = 6; */
        if (message.playPos)
            Vector_1.Vector.internalBinaryWrite(message.playPos, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* ScenePlayerSoundNotify.PlaySoundType play_type = 15; */
        if (message.playType !== 0)
            writer.tag(15, runtime_1.WireType.Varint).int32(message.playType);
        /* string sound_name = 14; */
        if (message.soundName !== "")
            writer.tag(14, runtime_1.WireType.LengthDelimited).string(message.soundName);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ScenePlayerSoundNotify
 */
exports.ScenePlayerSoundNotify = new ScenePlayerSoundNotify$Type();
