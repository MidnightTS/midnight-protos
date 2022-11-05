"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonsterRoute = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const RoutePoint_1 = require("./RoutePoint");
// @generated message type with reflection information, may provide speed optimized methods
class MonsterRoute$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MonsterRoute", [
            { no: 1, name: "route_points", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => RoutePoint_1.RoutePoint },
            { no: 2, name: "speed_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "route_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "arrive_range", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value) {
        const message = { routePoints: [] };
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
                case /* repeated com.midnights.game.RoutePoint route_points */ 1:
                    message.routePoints.push(RoutePoint_1.RoutePoint.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 speed_level */ 2:
                    message.speedLevel = reader.uint32();
                    break;
                case /* optional uint32 route_type */ 3:
                    message.routeType = reader.uint32();
                    break;
                case /* optional float arrive_range */ 4:
                    message.arriveRange = reader.float();
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
        /* repeated com.midnights.game.RoutePoint route_points = 1; */
        for (let i = 0; i < message.routePoints.length; i++)
            RoutePoint_1.RoutePoint.internalBinaryWrite(message.routePoints[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 speed_level = 2; */
        if (message.speedLevel !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.speedLevel);
        /* optional uint32 route_type = 3; */
        if (message.routeType !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.routeType);
        /* optional float arrive_range = 4; */
        if (message.arriveRange !== undefined)
            writer.tag(4, runtime_1.WireType.Bit32).float(message.arriveRange);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MonsterRoute
 */
exports.MonsterRoute = new MonsterRoute$Type();
