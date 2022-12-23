"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScenePlayerLocationNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const PlayerLocationInfo_1 = require("./PlayerLocationInfo");
const VehicleLocationInfo_1 = require("./VehicleLocationInfo");
// @generated message type with reflection information, may provide speed optimized methods
class ScenePlayerLocationNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("ScenePlayerLocationNotify", [
            { no: 11, name: "scene_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "vehicle_loc_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => VehicleLocationInfo_1.VehicleLocationInfo },
            { no: 4, name: "player_loc_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => PlayerLocationInfo_1.PlayerLocationInfo }
        ]);
    }
    create(value) {
        const message = { sceneId: 0, vehicleLocList: [], playerLocList: [] };
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
                case /* uint32 scene_id */ 11:
                    message.sceneId = reader.uint32();
                    break;
                case /* repeated VehicleLocationInfo vehicle_loc_list */ 6:
                    message.vehicleLocList.push(VehicleLocationInfo_1.VehicleLocationInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated PlayerLocationInfo player_loc_list */ 4:
                    message.playerLocList.push(PlayerLocationInfo_1.PlayerLocationInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* uint32 scene_id = 11; */
        if (message.sceneId !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.sceneId);
        /* repeated VehicleLocationInfo vehicle_loc_list = 6; */
        for (let i = 0; i < message.vehicleLocList.length; i++)
            VehicleLocationInfo_1.VehicleLocationInfo.internalBinaryWrite(message.vehicleLocList[i], writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated PlayerLocationInfo player_loc_list = 4; */
        for (let i = 0; i < message.playerLocList.length; i++)
            PlayerLocationInfo_1.PlayerLocationInfo.internalBinaryWrite(message.playerLocList[i], writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ScenePlayerLocationNotify
 */
exports.ScenePlayerLocationNotify = new ScenePlayerLocationNotify$Type();
