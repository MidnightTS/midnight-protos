"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerWorldSceneInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class PlayerWorldSceneInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("PlayerWorldSceneInfo", [
            { no: 3, name: "is_locked", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "scene_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "scene_tag_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { isLocked: false, sceneId: 0, sceneTagIdList: [] };
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
                case /* bool is_locked */ 3:
                    message.isLocked = reader.bool();
                    break;
                case /* uint32 scene_id */ 8:
                    message.sceneId = reader.uint32();
                    break;
                case /* repeated uint32 scene_tag_id_list */ 11:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.sceneTagIdList.push(reader.uint32());
                    else
                        message.sceneTagIdList.push(reader.uint32());
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
        /* bool is_locked = 3; */
        if (message.isLocked !== false)
            writer.tag(3, runtime_2.WireType.Varint).bool(message.isLocked);
        /* uint32 scene_id = 8; */
        if (message.sceneId !== 0)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.sceneId);
        /* repeated uint32 scene_tag_id_list = 11; */
        if (message.sceneTagIdList.length) {
            writer.tag(11, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.sceneTagIdList.length; i++)
                writer.uint32(message.sceneTagIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerWorldSceneInfo
 */
exports.PlayerWorldSceneInfo = new PlayerWorldSceneInfo$Type();
