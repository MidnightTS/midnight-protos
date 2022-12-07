"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvtEntityRenderersChangedNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const EntityRendererChangedInfo_1 = require("./EntityRendererChangedInfo");
const ForwardType_1 = require("./ForwardType");
// @generated message type with reflection information, may provide speed optimized methods
class EvtEntityRenderersChangedNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("EvtEntityRenderersChangedNotify", [
            { no: 5, name: "forward_type", kind: "enum", T: () => ["ForwardType", ForwardType_1.ForwardType, "FORWARD_TYPE_"] },
            { no: 1, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "is_server_cache", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 15, name: "renderer_changed_info", kind: "message", T: () => EntityRendererChangedInfo_1.EntityRendererChangedInfo }
        ]);
    }
    create(value) {
        const message = { forwardType: 0, entityId: 0, isServerCache: false };
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
                case /* ForwardType forward_type */ 5:
                    message.forwardType = reader.int32();
                    break;
                case /* uint32 entity_id */ 1:
                    message.entityId = reader.uint32();
                    break;
                case /* bool is_server_cache */ 3:
                    message.isServerCache = reader.bool();
                    break;
                case /* EntityRendererChangedInfo renderer_changed_info */ 15:
                    message.rendererChangedInfo = EntityRendererChangedInfo_1.EntityRendererChangedInfo.internalBinaryRead(reader, reader.uint32(), options, message.rendererChangedInfo);
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
        /* ForwardType forward_type = 5; */
        if (message.forwardType !== 0)
            writer.tag(5, runtime_1.WireType.Varint).int32(message.forwardType);
        /* uint32 entity_id = 1; */
        if (message.entityId !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.entityId);
        /* bool is_server_cache = 3; */
        if (message.isServerCache !== false)
            writer.tag(3, runtime_1.WireType.Varint).bool(message.isServerCache);
        /* EntityRendererChangedInfo renderer_changed_info = 15; */
        if (message.rendererChangedInfo)
            EntityRendererChangedInfo_1.EntityRendererChangedInfo.internalBinaryWrite(message.rendererChangedInfo, writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EvtEntityRenderersChangedNotify
 */
exports.EvtEntityRenderersChangedNotify = new EvtEntityRenderersChangedNotify$Type();
