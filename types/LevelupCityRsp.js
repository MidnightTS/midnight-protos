"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LevelupCityRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const CityInfo_1 = require("./CityInfo");
// @generated message type with reflection information, may provide speed optimized methods
class LevelupCityRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("LevelupCityRsp", [
            { no: 7, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "city_info", kind: "message", T: () => CityInfo_1.CityInfo },
            { no: 11, name: "scene_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "area_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { retcode: 0, sceneId: 0, areaId: 0 };
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
                case /* int32 retcode */ 7:
                    message.retcode = reader.int32();
                    break;
                case /* CityInfo city_info */ 14:
                    message.cityInfo = CityInfo_1.CityInfo.internalBinaryRead(reader, reader.uint32(), options, message.cityInfo);
                    break;
                case /* uint32 scene_id */ 11:
                    message.sceneId = reader.uint32();
                    break;
                case /* uint32 area_id */ 9:
                    message.areaId = reader.uint32();
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
        /* int32 retcode = 7; */
        if (message.retcode !== 0)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.retcode);
        /* CityInfo city_info = 14; */
        if (message.cityInfo)
            CityInfo_1.CityInfo.internalBinaryWrite(message.cityInfo, writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 scene_id = 11; */
        if (message.sceneId !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.sceneId);
        /* uint32 area_id = 9; */
        if (message.areaId !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.areaId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message LevelupCityRsp
 */
exports.LevelupCityRsp = new LevelupCityRsp$Type();
