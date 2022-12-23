"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSceneNpcPositionRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const NpcPositionInfo_1 = require("./NpcPositionInfo");
// @generated message type with reflection information, may provide speed optimized methods
class GetSceneNpcPositionRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("GetSceneNpcPositionRsp", [
            { no: 1, name: "scene_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "npc_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => NpcPositionInfo_1.NpcPositionInfo },
            { no: 5, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { sceneId: 0, npcInfoList: [], retcode: 0 };
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
                case /* uint32 scene_id */ 1:
                    message.sceneId = reader.uint32();
                    break;
                case /* repeated NpcPositionInfo npc_info_list */ 2:
                    message.npcInfoList.push(NpcPositionInfo_1.NpcPositionInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* int32 retcode */ 5:
                    message.retcode = reader.int32();
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
        /* uint32 scene_id = 1; */
        if (message.sceneId !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.sceneId);
        /* repeated NpcPositionInfo npc_info_list = 2; */
        for (let i = 0; i < message.npcInfoList.length; i++)
            NpcPositionInfo_1.NpcPositionInfo.internalBinaryWrite(message.npcInfoList[i], writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* int32 retcode = 5; */
        if (message.retcode !== 0)
            writer.tag(5, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetSceneNpcPositionRsp
 */
exports.GetSceneNpcPositionRsp = new GetSceneNpcPositionRsp$Type();
