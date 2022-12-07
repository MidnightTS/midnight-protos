"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncScenePlayTeamEntityNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const PlayTeamEntityInfo_1 = require("./PlayTeamEntityInfo");
// @generated message type with reflection information, may provide speed optimized methods
class SyncScenePlayTeamEntityNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("SyncScenePlayTeamEntityNotify", [
            { no: 7, name: "scene_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "entity_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => PlayTeamEntityInfo_1.PlayTeamEntityInfo }
        ]);
    }
    create(value) {
        const message = { sceneId: 0, entityInfoList: [] };
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
                case /* uint32 scene_id */ 7:
                    message.sceneId = reader.uint32();
                    break;
                case /* repeated PlayTeamEntityInfo entity_info_list */ 3:
                    message.entityInfoList.push(PlayTeamEntityInfo_1.PlayTeamEntityInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* uint32 scene_id = 7; */
        if (message.sceneId !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.sceneId);
        /* repeated PlayTeamEntityInfo entity_info_list = 3; */
        for (let i = 0; i < message.entityInfoList.length; i++)
            PlayTeamEntityInfo_1.PlayTeamEntityInfo.internalBinaryWrite(message.entityInfoList[i], writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SyncScenePlayTeamEntityNotify
 */
exports.SyncScenePlayTeamEntityNotify = new SyncScenePlayTeamEntityNotify$Type();
