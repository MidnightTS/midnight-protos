"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeCustomFurnitureInfoNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const HomeCustomFurnitureInfo_1 = require("./HomeCustomFurnitureInfo");
// @generated message type with reflection information, may provide speed optimized methods
class HomeCustomFurnitureInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("HomeCustomFurnitureInfoNotify", [
            { no: 13, name: "delete_custom_furniture_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "custom_furniture_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => HomeCustomFurnitureInfo_1.HomeCustomFurnitureInfo },
            { no: 3, name: "used_sub_furniture_count_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } }
        ]);
    }
    create(value) {
        const message = { deleteCustomFurnitureList: [], customFurnitureInfoList: [], usedSubFurnitureCountMap: {} };
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
                case /* repeated uint32 delete_custom_furniture_list */ 13:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.deleteCustomFurnitureList.push(reader.uint32());
                    else
                        message.deleteCustomFurnitureList.push(reader.uint32());
                    break;
                case /* repeated HomeCustomFurnitureInfo custom_furniture_info_list */ 15:
                    message.customFurnitureInfoList.push(HomeCustomFurnitureInfo_1.HomeCustomFurnitureInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* map<uint32, uint32> used_sub_furniture_count_map */ 3:
                    this.binaryReadMap3(message.usedSubFurnitureCountMap, reader, options);
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
    binaryReadMap3(map, reader, options) {
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
                default: throw new globalThis.Error("unknown map entry field for field HomeCustomFurnitureInfoNotify.used_sub_furniture_count_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 delete_custom_furniture_list = 13; */
        if (message.deleteCustomFurnitureList.length) {
            writer.tag(13, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.deleteCustomFurnitureList.length; i++)
                writer.uint32(message.deleteCustomFurnitureList[i]);
            writer.join();
        }
        /* repeated HomeCustomFurnitureInfo custom_furniture_info_list = 15; */
        for (let i = 0; i < message.customFurnitureInfoList.length; i++)
            HomeCustomFurnitureInfo_1.HomeCustomFurnitureInfo.internalBinaryWrite(message.customFurnitureInfoList[i], writer.tag(15, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* map<uint32, uint32> used_sub_furniture_count_map = 3; */
        for (let k of Object.keys(message.usedSubFurnitureCountMap))
            writer.tag(3, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Varint).uint32(message.usedSubFurnitureCountMap[k]).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeCustomFurnitureInfoNotify
 */
exports.HomeCustomFurnitureInfoNotify = new HomeCustomFurnitureInfoNotify$Type();
