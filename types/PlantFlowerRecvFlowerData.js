"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlantFlowerRecvFlowerData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ProfilePicture_1 = require("./ProfilePicture");
// @generated message type with reflection information, may provide speed optimized methods
class PlantFlowerRecvFlowerData$Type extends runtime_5.MessageType {
    constructor() {
        super("PlantFlowerRecvFlowerData", [
            { no: 14, name: "nickname", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "profile_picture", kind: "message", T: () => ProfilePicture_1.ProfilePicture },
            { no: 11, name: "flower_num_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } }
        ]);
    }
    create(value) {
        const message = { nickname: "", uid: 0, flowerNumMap: {} };
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
                case /* string nickname */ 14:
                    message.nickname = reader.string();
                    break;
                case /* uint32 uid */ 2:
                    message.uid = reader.uint32();
                    break;
                case /* ProfilePicture profile_picture */ 12:
                    message.profilePicture = ProfilePicture_1.ProfilePicture.internalBinaryRead(reader, reader.uint32(), options, message.profilePicture);
                    break;
                case /* map<uint32, uint32> flower_num_map */ 11:
                    this.binaryReadMap11(message.flowerNumMap, reader, options);
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
    binaryReadMap11(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field PlantFlowerRecvFlowerData.flower_num_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* string nickname = 14; */
        if (message.nickname !== "")
            writer.tag(14, runtime_1.WireType.LengthDelimited).string(message.nickname);
        /* uint32 uid = 2; */
        if (message.uid !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.uid);
        /* ProfilePicture profile_picture = 12; */
        if (message.profilePicture)
            ProfilePicture_1.ProfilePicture.internalBinaryWrite(message.profilePicture, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* map<uint32, uint32> flower_num_map = 11; */
        for (let k of Object.keys(message.flowerNumMap))
            writer.tag(11, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.flowerNumMap[k]).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlantFlowerRecvFlowerData
 */
exports.PlantFlowerRecvFlowerData = new PlantFlowerRecvFlowerData$Type();
