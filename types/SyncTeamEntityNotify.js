"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncTeamEntityNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const TeamEntityInfo_1 = require("./TeamEntityInfo");
// @generated message type with reflection information, may provide speed optimized methods
class SyncTeamEntityNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("SyncTeamEntityNotify", [
            { no: 10, name: "team_entity_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => TeamEntityInfo_1.TeamEntityInfo },
            { no: 1, name: "scene_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { teamEntityInfoList: [], sceneId: 0 };
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
                case /* repeated TeamEntityInfo team_entity_info_list */ 10:
                    message.teamEntityInfoList.push(TeamEntityInfo_1.TeamEntityInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 scene_id */ 1:
                    message.sceneId = reader.uint32();
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
        /* repeated TeamEntityInfo team_entity_info_list = 10; */
        for (let i = 0; i < message.teamEntityInfoList.length; i++)
            TeamEntityInfo_1.TeamEntityInfo.internalBinaryWrite(message.teamEntityInfoList[i], writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 scene_id = 1; */
        if (message.sceneId !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.sceneId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SyncTeamEntityNotify
 */
exports.SyncTeamEntityNotify = new SyncTeamEntityNotify$Type();
