"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneAreaWeatherNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class SceneAreaWeatherNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("SceneAreaWeatherNotify", [
            { no: 6, name: "weather_gadget_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "weather_value_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 9 /*ScalarType.STRING*/ } },
            { no: 7, name: "climate_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "trans_duration", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 15, name: "weather_area_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { weatherGadgetId: 0, weatherValueMap: {}, climateType: 0, transDuration: 0, weatherAreaId: 0 };
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
                case /* uint32 weather_gadget_id */ 6:
                    message.weatherGadgetId = reader.uint32();
                    break;
                case /* map<uint32, string> weather_value_map */ 11:
                    this.binaryReadMap11(message.weatherValueMap, reader, options);
                    break;
                case /* uint32 climate_type */ 7:
                    message.climateType = reader.uint32();
                    break;
                case /* float trans_duration */ 10:
                    message.transDuration = reader.float();
                    break;
                case /* uint32 weather_area_id */ 15:
                    message.weatherAreaId = reader.uint32();
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
                    val = reader.string();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field SceneAreaWeatherNotify.weather_value_map");
            }
        }
        map[key ?? 0] = val ?? "";
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 weather_gadget_id = 6; */
        if (message.weatherGadgetId !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.weatherGadgetId);
        /* map<uint32, string> weather_value_map = 11; */
        for (let k of Object.keys(message.weatherValueMap))
            writer.tag(11, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.LengthDelimited).string(message.weatherValueMap[k]).join();
        /* uint32 climate_type = 7; */
        if (message.climateType !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.climateType);
        /* float trans_duration = 10; */
        if (message.transDuration !== 0)
            writer.tag(10, runtime_1.WireType.Bit32).float(message.transDuration);
        /* uint32 weather_area_id = 15; */
        if (message.weatherAreaId !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.weatherAreaId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SceneAreaWeatherNotify
 */
exports.SceneAreaWeatherNotify = new SceneAreaWeatherNotify$Type();
