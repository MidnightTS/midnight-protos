"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScenePlayerInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const OnlinePlayerInfo_1 = require("./OnlinePlayerInfo");
// @generated message type with reflection information, may provide speed optimized methods
class ScenePlayerInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("ScenePlayerInfo", [
            { no: 2, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "scene_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "peer_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "online_player_info", kind: "message", T: () => OnlinePlayerInfo_1.OnlinePlayerInfo },
            { no: 3, name: "is_connected", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { uid: 0, sceneId: 0, peerId: 0, isConnected: false, name: "" };
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
                case /* uint32 uid */ 2:
                    message.uid = reader.uint32();
                    break;
                case /* uint32 scene_id */ 7:
                    message.sceneId = reader.uint32();
                    break;
                case /* uint32 peer_id */ 15:
                    message.peerId = reader.uint32();
                    break;
                case /* OnlinePlayerInfo online_player_info */ 9:
                    message.onlinePlayerInfo = OnlinePlayerInfo_1.OnlinePlayerInfo.internalBinaryRead(reader, reader.uint32(), options, message.onlinePlayerInfo);
                    break;
                case /* bool is_connected */ 3:
                    message.isConnected = reader.bool();
                    break;
                case /* string name */ 1:
                    message.name = reader.string();
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
        /* uint32 uid = 2; */
        if (message.uid !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.uid);
        /* uint32 scene_id = 7; */
        if (message.sceneId !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.sceneId);
        /* uint32 peer_id = 15; */
        if (message.peerId !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.peerId);
        /* OnlinePlayerInfo online_player_info = 9; */
        if (message.onlinePlayerInfo)
            OnlinePlayerInfo_1.OnlinePlayerInfo.internalBinaryWrite(message.onlinePlayerInfo, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool is_connected = 3; */
        if (message.isConnected !== false)
            writer.tag(3, runtime_1.WireType.Varint).bool(message.isConnected);
        /* string name = 1; */
        if (message.name !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.name);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ScenePlayerInfo
 */
exports.ScenePlayerInfo = new ScenePlayerInfo$Type();
