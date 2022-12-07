"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneWeatherForecastRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class SceneWeatherForecastRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("SceneWeatherForecastRsp", [
            { no: 15, name: "forecast_climate_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "next_climate_time", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { forecastClimateList: [], retcode: 0, nextClimateTime: 0n };
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
                case /* repeated uint32 forecast_climate_list */ 15:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.forecastClimateList.push(reader.uint32());
                    else
                        message.forecastClimateList.push(reader.uint32());
                    break;
                case /* int32 retcode */ 12:
                    message.retcode = reader.int32();
                    break;
                case /* uint64 next_climate_time */ 4:
                    message.nextClimateTime = reader.uint64().toBigInt();
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
        /* repeated uint32 forecast_climate_list = 15; */
        if (message.forecastClimateList.length) {
            writer.tag(15, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.forecastClimateList.length; i++)
                writer.uint32(message.forecastClimateList[i]);
            writer.join();
        }
        /* int32 retcode = 12; */
        if (message.retcode !== 0)
            writer.tag(12, runtime_2.WireType.Varint).int32(message.retcode);
        /* uint64 next_climate_time = 4; */
        if (message.nextClimateTime !== 0n)
            writer.tag(4, runtime_2.WireType.Varint).uint64(message.nextClimateTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SceneWeatherForecastRsp
 */
exports.SceneWeatherForecastRsp = new SceneWeatherForecastRsp$Type();
