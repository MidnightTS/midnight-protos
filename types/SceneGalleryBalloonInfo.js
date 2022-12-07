"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneGalleryBalloonInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const BalloonPlayerInfo_1 = require("./BalloonPlayerInfo");
// @generated message type with reflection information, may provide speed optimized methods
class SceneGalleryBalloonInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("SceneGalleryBalloonInfo", [
            { no: 13, name: "scene_player_balloon_info_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => BalloonPlayerInfo_1.BalloonPlayerInfo } },
            { no: 9, name: "end_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { scenePlayerBalloonInfoMap: {}, endTime: 0 };
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
                case /* map<uint32, BalloonPlayerInfo> scene_player_balloon_info_map */ 13:
                    this.binaryReadMap13(message.scenePlayerBalloonInfoMap, reader, options);
                    break;
                case /* uint32 end_time */ 9:
                    message.endTime = reader.uint32();
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
    binaryReadMap13(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = BalloonPlayerInfo_1.BalloonPlayerInfo.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field SceneGalleryBalloonInfo.scene_player_balloon_info_map");
            }
        }
        map[key ?? 0] = val ?? BalloonPlayerInfo_1.BalloonPlayerInfo.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, BalloonPlayerInfo> scene_player_balloon_info_map = 13; */
        for (let k of Object.keys(message.scenePlayerBalloonInfoMap)) {
            writer.tag(13, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            BalloonPlayerInfo_1.BalloonPlayerInfo.internalBinaryWrite(message.scenePlayerBalloonInfoMap[k], writer, options);
            writer.join().join();
        }
        /* uint32 end_time = 9; */
        if (message.endTime !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.endTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SceneGalleryBalloonInfo
 */
exports.SceneGalleryBalloonInfo = new SceneGalleryBalloonInfo$Type();
