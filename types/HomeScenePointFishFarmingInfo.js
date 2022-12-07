"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeScenePointFishFarmingInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class HomeScenePointFishFarmingInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("HomeScenePointFishFarmingInfo", [
            { no: 9, name: "scene_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "local_entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "fish_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { sceneId: 0, localEntityId: 0, fishIdList: [] };
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
                case /* uint32 scene_id */ 9:
                    message.sceneId = reader.uint32();
                    break;
                case /* uint32 local_entity_id */ 7:
                    message.localEntityId = reader.uint32();
                    break;
                case /* repeated uint32 fish_id_list */ 11:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.fishIdList.push(reader.uint32());
                    else
                        message.fishIdList.push(reader.uint32());
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
        /* uint32 scene_id = 9; */
        if (message.sceneId !== 0)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.sceneId);
        /* uint32 local_entity_id = 7; */
        if (message.localEntityId !== 0)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.localEntityId);
        /* repeated uint32 fish_id_list = 11; */
        if (message.fishIdList.length) {
            writer.tag(11, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.fishIdList.length; i++)
                writer.uint32(message.fishIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeScenePointFishFarmingInfo
 */
exports.HomeScenePointFishFarmingInfo = new HomeScenePointFishFarmingInfo$Type();
