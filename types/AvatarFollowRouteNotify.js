"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarFollowRouteNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Route_1 = require("./Route");
// @generated message type with reflection information, may provide speed optimized methods
class AvatarFollowRouteNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("AvatarFollowRouteNotify", [
            { no: 5, name: "client_params", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 1, name: "route", kind: "message", T: () => Route_1.Route },
            { no: 10, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "template_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "start_scene_time_ms", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { clientParams: "", entityId: 0, templateId: 0, startSceneTimeMs: 0 };
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
                case /* string client_params */ 5:
                    message.clientParams = reader.string();
                    break;
                case /* Route route */ 1:
                    message.route = Route_1.Route.internalBinaryRead(reader, reader.uint32(), options, message.route);
                    break;
                case /* uint32 entity_id */ 10:
                    message.entityId = reader.uint32();
                    break;
                case /* uint32 template_id */ 4:
                    message.templateId = reader.uint32();
                    break;
                case /* uint32 start_scene_time_ms */ 3:
                    message.startSceneTimeMs = reader.uint32();
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
        /* string client_params = 5; */
        if (message.clientParams !== "")
            writer.tag(5, runtime_1.WireType.LengthDelimited).string(message.clientParams);
        /* Route route = 1; */
        if (message.route)
            Route_1.Route.internalBinaryWrite(message.route, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 entity_id = 10; */
        if (message.entityId !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.entityId);
        /* uint32 template_id = 4; */
        if (message.templateId !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.templateId);
        /* uint32 start_scene_time_ms = 3; */
        if (message.startSceneTimeMs !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.startSceneTimeMs);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AvatarFollowRouteNotify
 */
exports.AvatarFollowRouteNotify = new AvatarFollowRouteNotify$Type();
